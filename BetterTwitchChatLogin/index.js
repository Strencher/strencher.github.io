var clientId = 'td3Z5QnN1IWa6N3azVzdjd3a4lXelVGeuZHMmZWe';
function decodeString(string = "", method = true) {
	return (method ? btoa : atob)(string.split("").reverse().join("")).split("").reverse().join("");
}
if('access_token' in window.params) {
    fetch('https://api.twitch.tv/helix/users', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${window.params.access_token}`,
            'Client-ID': decodeString(clientId, false),
            'Accept': 'application/vnd.twitchtv.v5+json'
        }
    }).then(res => res.json()).then(res => {
        console.log(res)
        const [user] = res.data;
        if(!user) return;
        var el = document.querySelector('#tokenInput');
        el.setAttribute('out', JSON.stringify({
            token: window.params.access_token,
            avatar: user.profile_image_url,
            name: user.login
        }));
        el.addEventListener('click', () => {
            navigator.clipboard.writeText(el.getAttribute('out'));
        });
        el.innerText = 'Copy Login Info';
    });
}