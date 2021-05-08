// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

let licenses = {
    None: " ",
    MITLicense: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    GNUGPLv3: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    ApacheLicense20: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    BSD2ClauseSimplifiedLicense: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    BSD3ClauseNewOrRevisedLicense: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
    EclipsePubliceLicense20: "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)",
    GNUAGPLv3: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)",
    GNUGPLv2: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
    GNULGPLv21: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    GNULGPLv3: "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)",
    MozillaPublicLicense20: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
    TheUnlicense: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseKey = license.replace(/\s/g, "").split(".").join("").split("\"").join("").split("-").join("");

    let selectedLicense = licenses[licenseKey];

    return selectedLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        let licenseKey = license.replace(/\s/g, "").split(".").join("").split("\"").join("").split("-").join("");

        let selectedLicense = licenses[licenseKey].split("]")[2].split("(")[1].split(")")[0];

        return selectedLicense;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== "None") {
        let LicenseSection = `## License
        
    This project is licensed under ${license}. for more information, visit: ${renderLicenseLink(license)}`;

        return LicenseSection;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

`;
}

module.exports = generateMarkdown;