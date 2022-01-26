import sourcebooks from '../../data/sourcebooks.js';

const formParse = (formData) =>
{
    let retVal = "<h3>This page doesn't return a character reflecting your given parameters yet.</h3><p>For now, it just tells you which sourcebooks are active for development purposes.<br>So, here ya go:</p>";
    for(const book in sourcebooks)
    {
        if(formData[book])
        {
            retVal += ("<br>" + sourcebooks[book]["Name"] + " is active.");
        }
    }
    retVal += "<p>For now, we suggest trying the full random generator with the 'GIMME A MIN!' button.</p><br><br><form class='goBack' id='goBackForm' action='/' method='GET'><button type='submit' class='' id='submitBtn' name=''>HOME</button></form>"
    return retVal;
}

export {
    formParse
};