import React from "react";

const PageHeader = props => {
    const { title , subTitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subTitle}</h2>
            <hr />
        </div>
    );
};

export default PageHeader;