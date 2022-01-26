let toggleManyOptions = (selectStatus, category) => {
    const options = document.getElementsByClassName(category);
    for(let i=0, n=options.length; i<n; ++i)
    {
        if(options[i].type == "checkbox" && options[i].offsetParent !== null)
        {
            options[i].checked = selectStatus;
            options[i].dispatchEvent(new Event('input'));
        }
    }
};