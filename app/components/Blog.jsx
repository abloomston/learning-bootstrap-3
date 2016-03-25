import React from 'react';

import IntroBlock from './IntroBlock.jsx';

const Blog = props => (
  <div>
    <IntroBlock/>
    <div className="container padded">
      <div className="row">
        <div className="col-sm-8 blog-main">
          <section>
            <h1><a href="#">Enhancing Existing Features</a></h1>
            <p className="lead"><a href="index.html">Infinite Skills</a></p>
            <hr/>
            <p><span className="glyphicon glyphicon-time"></span> Posted Oct 11, 2015 at 11:54 AM</p>
            <hr/>
            <img src={require("../images/blog1.jpg")} className="img-responsive"/>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
            </p>
            <a className="btn btn-primary" href="#">Read More &raquo;</a>
            <hr/>
          </section>
          <section>
            <h1><a href="#">Speed Mode Boosted</a></h1>
            <p className="lead"><a href="index.html">Infinite Skills</a></p>
            <hr/>
            <p><span className="glyphicon glyphicon-time"></span> Posted Sept 9, 2015 at 10:54 AM</p>
            <hr/>
            <img src={require("../images/blog2.jpg")} className="img-responsive"/>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
            </p>
            <a className="btn btn-primary" href="#">Read More &raquo;</a>
            <hr/>
          </section>
          <section>
            <h1><a href="#">Safe Mode Reached Public Beta</a></h1>
            <p className="lead"><a href="index.html">Infinite Skills</a></p>
            <hr/>
            <p><span className="glyphicon glyphicon-time"></span> Posted July 4, 2015 at 8:54 AM</p>
            <hr/>
            <img src={require("../images/blog3.jpg")} className="img-responsive"/>
            <hr/>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec hendrerit tempor tellus. Donec pretium posuere tellus. Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla posuere. Donec vitae dolor. Nullam tristique diam non turpis. Cras placerat accumsan nulla. Nullam rutrum. Nam vestibulum accumsan nisl.
            </p>
            <a className="btn btn-primary" href="#">Read More &raquo;</a>
            <hr/>
          </section>
          <ul className="pagination">
            <li><a href="#">&laquo;</a></li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">&raquo;</a></li>
          </ul>
        </div>
        <div className="col-sm-4 blog-sidebar">
          <section>
            <h3 className="tpad">Search</h3>
            <div className="input-group input-group-lg tpad">
              <span className="input-group-addon glyphicon glyphicon-search"></span>
              <input type="text" className="form-control input-lg" placeholder="Search"/>
              <span className="input-group-btn">
                <button className="btn btn-default" type="button">Go!</button>
              </span>
            </div>
          </section>
          <section>
            <h3 className="tpad">Tags</h3>
            <div className="list-group tpad">
              <a href="#" className="list-group-item active"><span className="badge">38</span>All Tags</a>
              <a href="#" className="list-group-item"><span className="badge">14</span>Speed Mode</a>
              <a href="#" className="list-group-item"><span className="badge">81</span>Eco Friendly</a>
              <a href="#" className="list-group-item"><span className="badge">4</span>Safe Mode</a>
              <a href="#" className="list-group-item"><span className="badge">27</span>Scenic Mode</a>
            </div>
            <hr/>
          </section>
          <section>
            <h3 className="tpad">Latest from Twitter</h3>
            <div className="media tpad">
              <a className="pull-left" href="#">
                <img className="media-object" src={require("../images/user.jpg")} alt="user"/>
              </a>
              <div className="media-body">
                <h4 className="media-heading">@Jimmy</h4>
                <p className="bpad">Can't believe how good this @MoveMe app is, blah blah blah.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

module.exports = Blog;
