///Logovanje korisnika tako da ostvari pristup podacima(aktivnostima) entiteta koji smo definisali na serveru u metodama 'getAll'
export default {
    template:`
<div>
<legend>
<form v-on:submit.prevent="login()" class=" login w-50 p-3 container fade-in">
<h1 style="text-align:center; color:white; background-color:black;" class="alert alert-success" role="alert"><em>Login </em></h1>
<div class="form-group">
    <label for="form-label">E-mail address</label>
    <input type="email" class="form-control" v-model="korisnik.email" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
</div>

<div class="form-group">
    <label for="form-label">Password</label>
    <input type="password" class="form-control" v-model="korisnik.lozinka" placeholder="Password">
</div>

<div>
    <button type="submit" class="btn btn-outline-success">Sign in</button>
</div>

<div class="alert alert-danger" role="alert" v-if="neuspesanLogin">Neuspešna prijava na sistem!</div>

<div class="dropdown-divider"></div>
<router-link class="bojaLogin nav-link active light" to="/korisnici"><em>Registruj se kao novi korisnik</em></router-link>

</form>
</legend>
</div>
    `,
    data : function(){
        return {
            korisnik:{
                "email":"",
                "lozinka": ""
            },
            neuspesanLogin: false
        };
    },
    methods:{
        login: function(){
            // console.log(this.korisnik);
            axios.post(`api/login`, this.korisnik).then((response) => {
                this.$router.push("/porudzbine");
            }, _ => {
                this.neuspesanLogin = true;
            });
        }
    }
}