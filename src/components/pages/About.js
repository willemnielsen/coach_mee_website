import React, { Component } from 'react'
import {Container, Col} from 'react-bootstrap';
import '../styling/About.css'

export default class About extends Component {
  render() {
    return (
      <>
      {/* make container with two cols  */}
      <Container id='test' fluid >
        <Col id='headshot'>
          <img src={"images/pfp.jpeg"} alt='Ryan Mee Headshot' />
        </Col>
        <Col id='about'>
          <h1>About Me</h1>
          <p>
            Now entering his fifth season at Vassar College, Ryan Mee came to Vassar College for his first head coaching position in the summer of 2018, after serving as an assistant coach at five prior destinations over many different levels. Since 2012, Mee has served as an assistant coach at Division I Davidson College in Davidson, North Carolina under legendary head coach Bob McKillop.
            The 2021-22 season was a historic one for the Vassar Men’s Basketball Program when the Brewers won the Liberty League Championship, earning their first NCAA Tournament appearance in program history. The Brewers also posted their most wins since the 2013-14 season, going 18-9. 
          </p>
          <p>
            Despite the 2020-21 season being canceled due to Covid-19, Mee kept the Brewers active with weekly practices and a senior day scrimmage against Bard. The Vassar team also earned the NABC Team Academic Excellence Award for the second consecutive year after posting a team GPA of 3.0 or higher.   
          </p>
          <p>
            In 2019-20, Mee helped lead the Brewers to their first Liberty League post-season appearance since the 2017-18 season with the team placing 5th in the conference. In the two years Mee has been able to run the Elite Clinic, there are currently five former attendees on the team. 
          </p>
          <p>
            In his first season at Vassar, Mee helped the Brewers to an 11-14, went 4-2 against top-three teams in the league, and had two 1,000-point scorers in Alex Seff '19 and Paul Grinde '19.
          </p>
          <p>
            While at Davidson, Mee helped in the recruiting efforts, while also focusing on day-to-day coaching responsibilities, player development, game and practice preparation, on-court coaching, social media management, scouting report preparation and community outreach.
          </p>
          <p>
            During his time at Davidson, the Wildcats earned three NCAA Tournament bids along with being part of a staff that earned Atlantic 10 Coaching Staff of the Year in 2014-15. Mee helped mentor 14 Wildcat players that earned either Southern Conference or Atlantic-10 yearly honors, while also helping assist three conference Players of the Year and an A-10 Rookie of the Year this past season in Kellan Grady.
          </p>
          <p>
            Prior to Davidson, Mee was an associate head coach at his alma mater, the University of Rochester from 2009-12. While at Rochester, Mee assisted will all aspects of the basketball program including scheduling, budget management, conditioning, weight training in addition to his coaching responsibilities.
          </p>
          <p>
            Mee was part of a staff in 2011 that saw its head coach Luke Flockerzi earn D3hoops.com East Region Coach of the Year, while helping the Yellowjackets to a University Athletic Association (UAA) title. Mee helped recruit athletes from all over the nation, bringing in student-athletes from Ohio, Massachusetts, Pennsylvania, Florida, Michigan and New York. He also helped the team to a Division III Sweet 16 appearance in 2010-11.
          </p>
          <p>
            As an undergraduate, Mee was a four-year varsity letter winner at Rochester, serving as team captain in 2004-05. He helped the Yellowjackets to four NCAA Tournament appearances as his squads went a combined 97-17 over his four seasons as part of the winningest class in the program’s history.
          </p>
          <p>
            Mee earned Honorable Mention UAA honors in 2003-04, and helped the squad to the national finals in 2005, finishing his career seventh in three-pointers made. Mee earned his bachelor of arts from Rochester in economics in 2005, while also acquiring a Master’s from Elmira in 2006.
          </p> 
          <p>
            Mee and his wife, Haniya, have two children, Trotter and Capucine.
          </p>
        </Col>
      </Container>
      </>
    )
  }
}