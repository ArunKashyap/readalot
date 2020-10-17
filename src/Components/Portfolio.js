import React, { Component } from 'react';

class Portfolio extends Component {
  render() {

    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
        var projectImage = 'images/portfolio/'+projects.image;
        return <div className="card">
             <img alt={projects.title} src={projectImage} /> 
            <div className="container">
              <h4><b>{projects.title}</b></h4>
              <p>{projects.category}</p>
              <p><b>{projects.published}</b></p>
              <p>Buy this book <a href = {projects.link}>here</a></p>
              {/* <p className="desc">{projects.description}</p> */}
            </div>
          </div>

            // <div key={projects.title} className="columns portfolio-item">
        //    <div className="item-wrap">
        //     <a href={projects.url} title={projects.title}>
        //        <img alt={projects.title} src={projectImage} />
        //        <div className="overlay">
        //           <div className="portfolio-item-meta">
        //          <h5>{projects.title}</h5>
        //              <p>{projects.category}</p>
        //           </div>
        //         </div>
        //       <div className="link-icon"><i className="fa fa-link"></i></div>
        //     </a>
        //     <div>{projects.description}</div>
        //   </div>
        // </div>

        
      })
    }

    return (
      <section id="portfolio">

      <div className="row">

         <div className="twelve columns collapsed">

            <h1>Check Out Some of My Books.</h1>

            <hr />

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                {projects}
            </div>


          </div>
      </div>
   </section>
    );
  }
}

export default Portfolio;
