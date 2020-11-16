import React from "react";

function CardComponent(props: any) {
  const { name, colors, url, onShow } = props;
  return (
    <div className="col-sm-4" onClick={() => onShow(true, { url })}>
      <div className="thumbnail">
        <img src={url} alt="Paris" width="214" height="250" />
        <p>
          <strong>{name}</strong>
        </p>
        <p>{colors} more colors</p>
      </div>
    </div>
  );
}

export default CardComponent;
