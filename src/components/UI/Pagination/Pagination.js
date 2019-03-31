import React from 'react';

import classes from './Pagination.css';

const pagination = (props) => {
  const previous = parseInt(props.page) - 1 > 0 ? "/planets/"+ (parseInt(props.page)-1) : null;
  const next = parseInt(props.page) + 1 <= props.total ? "/planets/"+ (parseInt(props.page)+1) : null;

return (
    <div className={classes.Pagination}>
        {previous ? <a href={previous} className={classes.previous}> PREVIOUS</a> : null}
        <span className={classes.pageNumber}>Page: {props.page}</span>
        {next ? <a href={next} className={classes.next}> NEXT</a> : null}
    </div>
)};

export default pagination;
