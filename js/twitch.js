

// check whether or not we are live on twitch
// if not, don't display the stream window at all


// Create a Twitch.Embed object that will render within the "twitch-embed" root element
new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "gentlenyan",
    layout: "video",
    // only needed if your site is also embedded on embed.example.com and othersite.example.com 
    parent: ["embed.example.com", "othersite.example.com"]
})
