
// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.projectName}

  ${data.badge}

  ## Description

  ${data.description}

  ## Table of Contents

  -[Installation](#installation)

  -[Usage](#Usage)

  -[License](#license)

  -[Contributing](#contributing)

  -[Tests](#tests)

  -[Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## License

  This project is licensed under ${data.link}.

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [www.github.com/${data.github}](https://github.com/${data.github})

  `;
  }
  
  module.exports = generateMarkdown;