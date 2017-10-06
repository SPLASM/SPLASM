import React from 'react';

const CourseListItem = (props) =>
  <li className="col-xs-12">
    <div className="col-xs-12 col-sm-9">
      <a href={props.course.url}>
        <h4>{props.course.name}</h4>
      </a>
      <p>{props.course.parent}</p>
    </div>
    <div className="col-sm-3 col-xs-12">
      <label>Status:</label>
      <select className="col-xs-12" defaultValue={props.course.usertocourse.status}>
        <option>100%</option>
        <option>75%</option>
        <option>50%</option>
        <option>25%</option>
        <option>0%</option>
      </select>
    </div>
  </li>;

export default CourseListItem;
