//Content slider icons
import arrow_left from '../../Content/icons/arrow_left.svg';
import arrow_right from '../../Content/icons/arrow_right.svg';
import circle from '../../Content/icons/circle.svg';

//Social media icon content
import github_logo from '../../Content/icons/github_logo.svg';
import linkedin_logo from '../../Content/icons/linkedin_logo.svg';
import youtube_logo from '../../Content/icons/youtube_logo.svg';
import instagram_logo from '../../Content/icons/instagram_logo.svg';

//Skills icon content
import c_sharp_logo from '../../Content/icons/c_sharp_logo.svg';
import css_logo from '../../Content/icons/css_logo.svg';
import dotnet_logo from '../../Content/icons/dotnet_logo.svg';
import git_logo from '../../Content/icons/git_logo.svg';
import html_logo from '../../Content/icons/html_logo.svg';
import javascript_logo from '../../Content/icons/javascript_logo.svg';
import jest_logo from '../../Content/icons/jest_logo.svg';
import jira_logo from '../../Content/icons/jira_logo.svg';
import material_ui_logo from '../../Content/icons/material_ui_logo.svg';
import octopus_deploy_logo from '../../Content/icons/octopus_deploy_logo.svg';
import python_logo from '../../Content/icons/python_logo.svg';
import react_logo from '../../Content/icons/react_logo.svg';
import sass_logo from '../../Content/icons/sass_logo.svg';
import sql_logo from '../../Content/icons/sql_logo.svg';
import storybook_logo from '../../Content/icons/storybook_logo.svg';
import typescript_logo from '../../Content/icons/typescript_logo.svg';
import visual_studio_logo from '../../Content/icons/visual_studio_logo.svg';
import visual_studio_code_logo from '../../Content/icons/visual_studio_code_logo.svg';
import vue_logo from '../../Content/icons/vue_logo.svg';
import zeplin_logo from '../../Content/icons/zeplin_logo.svg';

export const GetIcon = (iconName: string) => {
    switch(iconName) {
        case 'arrow_left': {
            return arrow_left;
        }
        case 'arrow_right': {
            return arrow_right;
        }
        case 'circle': {
            return circle;
        }
        case 'github_logo': {
            return github_logo;
        }
        case 'linkedin_logo': {
            return linkedin_logo;
        }
        case 'youtube_logo': {
            return youtube_logo;
        }
        case 'instagram_logo': {
            return instagram_logo;
        }
        case 'c_sharp_logo': {
            return c_sharp_logo;
        }
        case 'css_logo': {
            return css_logo;
        }
        case 'dotnet_logo': {
            return dotnet_logo;
        }
        case 'git_logo': {
            return git_logo;
        }
        case 'html_logo': {
            return html_logo;
        }
        case 'javascript_logo': {
            return javascript_logo;
        }
        case 'jest_logo': {
            return jest_logo;
        }
        case 'jira_logo': {
            return jira_logo;
        }
        case 'material_ui_logo': {
            return material_ui_logo;
        }
        case 'octopus_deploy_logo': {
            return octopus_deploy_logo;
        }
        case 'python_logo': {
            return python_logo;
        }
        case 'react_logo': {
            return react_logo;
        }
        case 'sass_logo': {
            return sass_logo;
        }
        case 'sql_logo': {
            return sql_logo;
        }
        case 'storybook_logo': {
            return storybook_logo;
        }
        case 'typescript_logo': {
            return typescript_logo;
        }
        case 'vue_logo': {
            return vue_logo;
        }
        case 'visual_studio_logo': {
            return visual_studio_logo
        }
        case 'visual_studio_code_logo': {
            return visual_studio_code_logo
        }
        case 'zeplin_logo': {
            return zeplin_logo
        }
    };
}