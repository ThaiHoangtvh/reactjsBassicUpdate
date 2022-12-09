import React, { memo } from "react";
const Footer = ({ TaskStatus }) => {
    return (
      <div id="footer">
        <ul>
            <li><span>{TaskStatus.taskLenght}{" "}
            {TaskStatus.taskLenght === 1 ? "task" : "tasks"}</span><span> Tasks</span></li>
            <li><span>{TaskStatus.donetaskLength}</span><span> Complete</span></li>
            <li><span>{TaskStatus.openLength}</span><span> Open</span></li>
        </ul>
        <a href="google.com">About</a>
      </div>
    );
  };
  
  export default memo(Footer);

  