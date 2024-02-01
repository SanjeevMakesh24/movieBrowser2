import Hero from "./Hero"

const AboutView = () =>{
    return(
      <> 
      <Hero text = 'About us' /> 
      {/* adding a prop */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
            Add Content for the about page
            </p> 

          </div>
        </div>
      </div>
      </>
      
    )
  }

  export default AboutView