// using es6 class
 
class Github{
    constructor(){
        this.client_id='Iv1.4ab40d46e5e0ef67';
        this.client_secret=  'bc502aa07fa98bd03bd854d41d4b4b064d0dd0be';
    }

    async getUser(user){
const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

const profile = await profileResponse.json();
return {profile}

}
}