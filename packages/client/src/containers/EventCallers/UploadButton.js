import React from "react";

const UploadButton = (props) =>
{
    const handleChange = (event) =>
    {
        props.onChange(event.target.files[0]);
        event.target.value = '';
    }

    const labelImg = () =>
    {
        if(props.img)
        {
            return (
                <img className={props.imgName} alt={props.id} src={props.img}/>
            );
        }
        else
            return null;
    }

    return (
        <div className={props.containerName + " uploadButton-container"}>
            <input
                type="file"
                accept="application/json"
                onChange={handleChange}
                id={props.id}
                className={props.className + " hidden"}>
            </input>
            <label htmlFor={props.id} className={props.className+"-label uploadButton-label"}>
                {labelImg()}
                <span className="uploadButton-span">{props.label}</span>
            </label>
        </div>
    );
}

export default UploadButton;