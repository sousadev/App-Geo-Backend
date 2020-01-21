const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();


routes.post('/devs', async (req, res) =>{
    const { github_username, techs } = req.body;
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    const { avatar_url, name = login, bio } = apiResponse.data;
    const techsArray = techs.split(',').map(tech => tech.trim());
    const dev = await Dev.create({
        name,
        github_username,
        avatar_url,
        bio,
        techs: techsArray
    })

    return res.json(dev);
});

module.exports = routes;

