const express = require('express')
const app = express()
const port = 2137
require('dotenv').config();
const querystring = require('querystring');
const axios = require('axios')
const cors = require('cors')
const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET
const REDIRECT_URI  = process.env.REDIRECT_URI
const dayjs = require('dayjs')
const cookieParser = require('cookie-parser')
const path = require('path')
app.use(cookieParser())
app.use(cors())
app.use(express.static(path.join(__dirname + '/client/dist')))




const  generateRandomString = length => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

const stateKey = "spotify_auth_state"

const isAuthenticated = async(req, res, next) => {
    // console.log(req.cookies)
    const {access_token,refresh_token,cookie_created} = req.cookies
    // return res.status(401).json({"Authenticated":false})
    // console.log("Access token",access_token)
    if (access_token && Date.now()-(cookie_created)<3600000  ){
        return next()
    } else if(refresh_token){
        try{
            const {data} = await axios({
                method: 'post',
                url: 'https://accounts.spotify.com/api/token',
                data: querystring.stringify({
                  grant_type: 'refresh_token',
                  refresh_token: refresh_token
                }),
                headers: {
                  'content-type': 'application/x-www-form-urlencoded',
                  Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
                },
              })
            res.cookie('access_token',data.access_token, {
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true, 
                expires: dayjs().add(1, "hour").toDate(),
            })
            res.cookie('cookie_created',Date.now(), {
                secure: process.env.NODE_ENV !== "development",
                httpOnly: true,
                expires: dayjs().add(30, "days").toDate(),
            })
            console.log('DATA',data)
            return res.json({"Authenticated":true})
        }catch(err){
            console.log("err in refesh",err)
            return res.json({"Authenticated":false})
        }
    } else {
        // console.log("not")
        return res.json({"Authenticated":false})
    }
    
}

app.get('/api/login',(req,res) => {
    var scope = 'user-read-private user-read-email user-library-read playlist-read-private user-follow-read user-top-read user-read-recently-played';
    var state = generateRandomString(16)
    res.cookie(stateKey,state)

    res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      scope: scope,
      redirect_uri: REDIRECT_URI,
      state: state,
      show_dialog: true
    }));
})

app.get('/callback',async(req,res) => {
    // console.log(req.query)
    var code = req.query.code || null
    var state = req.query.code || null
    var error = req.query.error || null
    // console.log(req.cookies)
    if (error) res.send("err")
    else{
        try {
            const {data,status} = await axios({
                method:'POST',
                url: 'https://accounts.spotify.com/api/token',
                data: querystring.stringify({
                    code: code,
                    redirect_uri: REDIRECT_URI,
                    grant_type: 'authorization_code'
                }),
                headers: {
                    'content-type': 'application/x-www-form-urlencoded',
                    'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
                }
            })
            const {access_token, refresh_token,expires_in} = data
            
            
            if (status === 200){
            
                res.cookie('access_token',access_token, {
                    secure: process.env.NODE_ENV !== "development",
                    httpOnly: true, 
                    expires: dayjs().add(1, "hour").toDate(),
                })
                res.cookie('refresh_token',refresh_token, {
                    secure: process.env.NODE_ENV !== "development",
                    httpOnly: true,
                    expires: dayjs().add(30, "days").toDate(),
                })
                res.cookie('expires_in',expires_in, {
                    secure: process.env.NODE_ENV !== "development",
                    httpOnly: true,
                    expires: dayjs().add(30, "days").toDate(),
                })
                res.cookie('cookie_created',Date.now(), {
                    secure: process.env.NODE_ENV !== "development",
                    httpOnly: true,
                    expires: dayjs().add(30, "days").toDate(),
                })
                // return res.redirect(`http://localhost:5173`)
                if (process.env.NODE_ENV === 'development'){
                    return res.redirect(`http://localhost:2137`)
                    
                } else {
                    return res.redirect(`https://www.statisticsforspotify.net/`)
                    
                }
                
            } else {
                var queryparams = querystring.stringify({
                    error: 'Invalid token.'
                }) 
              
                if (process.env.NODE_ENV === 'development'){
                    return res.redirect(`http://localhost:2137?${queryparams}`)
                    
                } else {
                    return res.redirect(`https://www.statisticsforspotify.net?${queryparams}`)
                    
                }
            }
        }catch(err){
            console.log("Err in callback",err)
            if (process.env.NODE_ENV === 'development'){
                return res.redirect(`http://localhost:2137`).json({"erorr":'An error occured during authorization.'})
                
            } else {
                return res.redirect(`https://www.statisticsforspotify.net?${queryparams}`).json({"erorr":'An error occured during authorization.'})
                
            }
        
        }
        
    }
    
})

app.get('/api/refresh_token', async(req,res) => {
    
    const {refresh_token} = req.cookies
    try{
        const {data} = await axios({
            method: 'post',
            url: 'https://accounts.spotify.com/api/token',
            data: querystring.stringify({
              grant_type: 'refresh_token',
              refresh_token: refresh_token
            }),
            headers: {
              'content-type': 'application/x-www-form-urlencoded',
              Authorization: `Basic ${new Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`,
            },
          })
        res.cookie('access_token',data.access_token, {
            secure: process.env.NODE_ENV !== "development",
            httpOnly: true, 
            expires: dayjs().add(1, "hour").toDate(),
        })
        console.log('data',data)
        res.json(data)
    }catch(err){
        console.log("err in refesh")
        res.json(err)
    }
})

app.get('/api/is-authenticated',isAuthenticated,(req,res) => {
    res.json({"Authenticated":true})
})
app.get('/api/get-profile',isAuthenticated,async(req,res) => {
    const {access_token} = req.cookies
    // console.log(access_token)

    const {data} = await axios.get("https://api.spotify.com/v1/me", {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
    // console.log(data)
    res.json(data)
})

app.get('/api/get-recent',isAuthenticated,async(req,res) => {
    const {access_token} = req.cookies
    // console.log(access_token)
    const {limit} = req.query
    const before = Date.now()
    try {
        const {data} = await axios.get(`https://api.spotify.com/v1/me/player/recently-played?limit=${limit}&before=${before}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
    console.log(data)
    res.json(data)
    }catch(err){
        console.log("ERR IN GET RECENT")
        // console.log(err)
        return res.json({'error':'An error occured.'})
    }
   
})
app.post('/api/logout',(req,res) => {
    res.clearCookie("access_token");
    res.clearCookie("refresh_token")
    res.clearCookie("cookie_created")
    res.clearCookie("expires_in")
    res.json({'Authenticated':false})
})

app.get('/api/get-top',isAuthenticated,async(req,res) => {
    const {access_token} = req.cookies
    const {time_range, limit,typeReq} = req.query
    // console.log('time',time_range,'type',typeReq)
    try {
        const {data,status} = await axios.get(`https://api.spotify.com/v1/me/top/${typeReq}?time_range=${time_range}&limit=${limit}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        })
        // console.log(data)
        res.json(data)
    } catch(err){
        console.log("Err in get top")
        return res.json({'error':'An error occured.'})
    }
    
})

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/dist/index.html'));
});
app.listen(process.env.PORT || port, () => {
    console.log(`App running on  http://localhost:${process.env.PORT || port}`)

})