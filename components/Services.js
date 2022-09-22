
import styled from 'styled-components'



export const Wrapper = styled.div`
line-height: 1.5;
padding: 20px;
text-align: right;
opacity: 0.8;
margin: 70px 0;

h3 {
font-size: 25px;
font-weight: bold;
}

ul {
margin: 25px;
padding-bottom: 15px;
}

li {
  font-size: 20px;
  list-style-type: none;
  padding: 3px 0;
}

@media only screen and (max-width: 768px) {
padding: 10px;
li {
  font-size: 17px;
  padding: 10px 0;
}
}

@media only screen and (max-width: 531px) {
  ul {
    margin: 5px 10px;
  }
}
`

export const SkillsTitle = styled.h2`
font-weight: bold;
padding-right: 25px;
padding-top: 20px;
text-decoration: underline;
font-size: 35px;
text-align: right;
`
  
  
  const skills = () => {
  return (
    <>
  <Wrapper>
  <SkillsTitle id="services">Services</SkillsTitle>
                <ul>
                <h3>Frontend Web Design</h3> 
                          <li>Colorful websites for creative niches and small businesses.</li>
                          <li>Quick and interactive styling</li>
                          <li>Effective SEO</li>
                          </ul> 
                <ul>
                <h3>Content Management</h3>  
                          <li>Currently using Sanity.io for content writing, image management, and backend data storage</li>
                          <li>I work one on one with customers to create the ideal website product</li>
                          <li>In my freetime, I also work and manage my
                             own projects
                              </li> 
                          </ul>
                          </Wrapper>
    </>
  )
  }
  
  export default skills