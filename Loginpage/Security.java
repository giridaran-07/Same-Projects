@Configuration
public class Security extends WebSecurityConfigurerAdapter {
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.apply(stormpath()).and()
        .authorizeRequests()
        .antMatchers("/","/public/**","/login","/register","/forgot").permitAll();
    }
}
