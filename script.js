let oppsList = [
    {
        username: "XxMoonLightGrowlxX",
        display: "angel",
        date: "8th August, 2024"
    },
    {
        username: "X284739",
        display: "N/A",
        date: "8th August, 2024"
    },
    {
        username: "jazzzy4life",
        display: "pawwz",
        date: "8th August, 2024"
    },
    {
        username: "termanator4466",
        display: "Termanatorman",
        date: "8th August, 2024"
    },
    {
        username: "winsedvin",
        display: "sss",
        date: "8th August, 2024"
    },
    {
        username: "sugarbuhni",
        display: "sugarbuhni",
        date: "8th August, 2024"
    }
];

/*
{
    username: "",
    display: "",
    date: ""
}
*/

oppsList = oppsList.reverse();

const oppsListParent = document.getElementById("opps-list-parent");

function NewOpp(username, displayName, date) {
    //Storing properly formatted text
    const usernameText = `Username: ${username}`;
    const displayNameText = `Display name: ${displayName}`;
    const dateText = `Date made/updated: ${date}`;

    //Creating HTML elements
    const parent = document.createElement("div");

    const userInfoDiv = document.createElement("div");
    const dateInfoDiv = document.createElement("div");

    const usernameContainer = document.createElement("p");
    const displayNameContainer = document.createElement("p");

    const dateContainer = document.createElement("p");

    //Setting the text value into associated paragraph element
    usernameContainer.textContent = usernameText;
    displayNameContainer.textContent = displayNameText;

    dateContainer.textContent = dateText;

    //Setting classes
    parent.className = "opps-list-item";

    userInfoDiv.className = "opps-list-item-name-info";
    dateInfoDiv.className = "opps-list-item-date-info";

    usernameContainer.className = "opps-list-item-username";
    displayNameContainer.className = "opps-list-item-display-name";

    dateContainer.className = "opps-list-item-date-added";

    //Combinging it all into one
    userInfoDiv.appendChild(usernameContainer);
    userInfoDiv.appendChild(displayNameContainer);

    dateInfoDiv.appendChild(dateContainer);

    parent.appendChild(userInfoDiv);
    parent.appendChild(dateInfoDiv);

    //Returning product
    return parent;
};

oppsList.forEach((opp) => {
    const htmlOppDiv = NewOpp(opp.username, opp.display, opp.date);

    oppsListParent.appendChild(htmlOppDiv);
});