let toggleOptionViz = (sendID, targetName="", targetID="") => {
    const sending = document.getElementById(sendID);
    // set as off or invisible for init
    let viz = "none";
    let tog = false;
    if(sending.type == "checkbox")
    {
        if(sending.checked)
        {
            viz = "block";
            tog = true
        }
    }

    if(targetName!=="")
    {
        const targets = document.getElementsByClassName(targetName);
        for(let i=0, n=targets.length; i<n; ++i){
            if(targets[i].id !== targetID) //when both ID and name are given, ID is excluded
            {
                targets[i].style.display = viz;
                if(tog === false)
                {
                    console.log(targets[i].firstElementChild + ", " + targets[i].firstElementChild.checked);
                    targets[i].firstElementChild.checked = tog;
                    console.log(targets[i].firstElementChild + ", " + targets[i].firstElementChild.checked);
                }
            }
        }
    }
    else if(targetID!=="") //if only ID is given, target only ID
    {
        const target = document.getElementById(targetID);
        target.style.display = viz;
        if(tog === false)
        {
            target.firstElementChild.checked = tog;
        }
    }
    else
        return;
};