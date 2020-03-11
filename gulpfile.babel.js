/****************IGNORE THIS SECTION**********************/
import gulp from 'gulp';
// import babel from 'gulp-babel';
import compass from 'gulp-compass';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import sass from 'gulp-sass';
import minifyCSS from 'gulp-minify-css';
import useref from 'gulp-useref';
import uglify from 'gulp-uglify';
import gulpIf from 'gulp-if';
import cssnano from 'gulp-cssnano';
import download from 'gulp-download';
import cache from 'gulp-cache';
import imagemin from 'gulp-imagemin';
import gcmq from 'gulp-group-css-media-queries';
import browserSync from 'browser-sync';
import autoreload from 'autoreload-gulp';
import splitFiles from 'gulp-split-files';
/****************IGNORE THIS SECTION**********************/

/*
IMPORTANT NOTE:
If you wish to compile AMP and use browserSync Set this link on your amp-layout
<link href="{root}styles/amp.css" rel="stylesheet">
*/

/****************MODIFY THIS SECTION ONLY**********************/
//Set Proxy server
var project = {
    0: {
        //BASE SITE STRUCTURE
        projectName: "DENTAL THEME 4",
        proxy: "https://admin.roya.com/sites/Site-a64dee50-9333-4a60-a4f2-e9a982401d38",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/DENTAL/DENTAL THEME 4'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "CHIRO THEME 1",
        proxy: "https://admin.roya.com/sites/Site-2ac7da87-1c9c-494e-93ac-7b7504f1927b",
        compileAmp: false,
        folderName: 'BASE SITE SASS/CHIRO/CHIRO THEME 1',
        targetFile: ""
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "CHIRO THEME 3",
        proxy: "https://admin.roya.com/sites/Site-7b3bfaa8-b5d5-478c-88a0-617fad9637c2",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/CHIRO/CHIRO THEME 3'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "CHIRO THEME 2",
        proxy: "https://admin.roya.com/sites/Site-18bf3741-7e0b-40a1-90de-b055e5ecd197",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/CHIRO/CHIRO THEME 2',
        targetFile: ""
    },
    1: {
        //BASE SITE STRUCTURE
        projectName: "CHIRO THEME 4",
        proxy: "https://admin.roya.com/sites/Site-8621983b-2c36-4614-8bb1-aa84ecf36e52",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/CHIRO/CHIRO THEME 4'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "DENTAL THEME 2",
        proxy: "https://admin.roya.com/sites/Site-44f2384e-a9fb-4a25-aa24-5135ac0173f4",
        compileAmp: false,
        targetFile: "",
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/DENTAL/DENTAL THEME 2'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "DENTAL THEME 1",
        proxy: "https://admin.roya.com/sites/Site-a7211d3c-e0ee-452a-abbb-22d53464ed13",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/DENTAL/DENTAL THEME 1'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "DENTAL THEME 3",
        proxy: "https://admin.roya.com/sites/Site-e69dd8b6-2e24-492c-93c4-310162c08233",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/DENTAL/DENTAL THEME 3'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 1",
        proxy: "https://admin.roya.com/sites/Site-89f83d76-9ead-4135-935d-e3e01e84eb1e",
        compileAmp: false,
        targetFile: "landing/dry-eyes-relief",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 1'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 2",
        proxy: "https://admin.roya.com/sites/Site-d0722f45-1924-4ea6-883d-2de9b74d187e",
        compileAmp: false,
        targetFile: "landing/dry-eyes-relief",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 2'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 3",
        proxy: "https://admin.roya.com/sites/Site-f7ff2955-3dd9-4b47-a54e-c9cde18b78d6",
        compileAmp: false,
        targetFile: "landing/dry-eyes-relief",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 3'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 4",
        proxy: "https://admin.roya.com/sites/Site-ac712f76-d550-4684-bd64-1430ec6caa9a",
        compileAmp: false,
        targetFile: "landing/dry-eyes-relief",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 4'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 5",
        proxy: "https://admin.roya.com/sites/Site-c3c5a95f-9dbc-4094-85e8-5ed4625f2cd5",
        compileAmp: false,
        targetFile: "landing/dry-eyes-relief",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 5'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 1",
        proxy: "https://admin.roya.com/sites/Site-af5f6b84-413e-4333-adbd-56b7295ff0d1",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/VET/VET THEME 1'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 2",
        proxy: "https://admin.roya.com/sites/Site-05c436a2-6728-451d-ab7c-3a7e9d1011bd",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/VET/VET THEME 2'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 3",
        proxy: "https://admin.roya.com/sites/Site-cdf0827f-ce68-4990-8f3b-438a5a5a9ee1",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/VET/VET THEME 3'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 4",
        proxy: "https://admin.roya.com/sites/Site-e00b8f3b-b7cd-4d81-bfcc-0054136601c3",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/VET/VET THEME 4'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 5",
        proxy: "https://admin.roya.com/sites/Site-df60f3a3-2ab4-4670-8e8a-8ecc79fd2d7a",
        compileAmp: false,
        targetFile: "email-reviews",
        folderName: 'BASE SITE SASS/VET/VET THEME 5'
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "faulknerplasticsurgery.com",
        proxy: "https://admin.roya.com/sites/Site-d304aa63-65c4-4a8f-8e2a-eb95028cbd74",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/faulknerplasticsurgery.com',
        targetFile: "coolscupting",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "overide.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "visionsource-innovative-eye.com",
        proxy: "https://admin.roya.com/sites/Site-60db761b-01c2-4a6f-a778-fc080ea26cf0",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/visionsource-innovative-eye.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "updates.css",
        }
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "ofirorthodontics.com",
        proxy: "https://admin.roya.com/sites/Site-ebd2a871-5c36-4d01-a156-ed6161f3c882",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/ofirorthodontics.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "spineclinicsalem.com",
        proxy: "https://admin.roya.com/sites/Site-922699a4-4977-449c-9058-0eabb8a686f8",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/spineclinicsalem.com',
        targetFile: "",
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "tbd.com",
        proxy: "https://admin.roya.com/sites/Site-672a2122-43d4-4392-b9a9-32dd9ae0fe83",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/tbd.com',
        targetFile: "",
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.eyesonyoupc.com",
        proxy: "https://admin.roya.com/sites/Site-ea3b0dd6-be5c-4fd7-a80f-149cd5324fd5",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/eyesonyoupc.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "ivan_overrides.css",
        }
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO 3",
        proxy: "https://admin.roya.com/sites/Site-f7ff2955-3dd9-4b47-a54e-c9cde18b78d6",
        compileAmp: false,
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 3',
        targetFile: "",
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.usasportsmed.com",
        proxy: "https://admin.roya.com/sites/Site-88bd55f7-f53b-4e55-bb8f-a6527d90367d",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/usasportsmed.com',
        targetFile: "",
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.drrandallperry.com",
        proxy: "https://admin.roya.com/sites/Site-bbcf0839-36fc-4cd5-826a-b5b1e005b620",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/drrandallperry.com',
        targetFile: "meet-our-doctors",
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "sdar",
        proxy: "https://admin.roya.com/sites/Site-e5c6dbd4-36ed-4057-8677-0b1eedbcde65",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/sdar',
        targetFile: "tools/affiliates",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "overide.css",
        }
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "goldengatedentist.com",
        proxy: "https://admin.roya.com/sites/Site-8a1f07ef-72f0-483d-8fe2-4cef97bca523",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/goldengatedentist.com',
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "dizzinessandheadache.com",
        proxy: "https://admin.roya.com/sites/Site-3b318919-e2ad-46e1-8ea7-bf85d36627ef",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/dizzinessandheadache.com',
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "empoweryoursmile.com",
        proxy: "https://admin.roya.com/sites/Site-320e3004-d2ba-4d8b-876e-8fdabcaef3b7",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/empoweryoursmile.com',
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "overide.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "claritysurgicalny",
        proxy: "https://admin.roya.com/sites/Site-7fe9650c-46f7-4b46-a14b-13e9d38eb977",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/claritysurgicalny',
        targetFile: "media",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "overide.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "tala AMP",
        proxy: "https://admin.roya.com/sites/Site-7fe9650c-46f7-4b46-a14b-13e9d38eb977",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/talaAmp',
        targetFile: "",
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "brushnbrace",
        proxy: "https://admin.roya.com/sites/Site-324d2fa4-bb17-441c-8c38-85d2c2579f85",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/brushnbrace',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "new_inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "eyemdofniceville.com",
        proxy: "https://admin.roya.com/sites/Site-2595962a-246a-469e-92a1-1f0fadbb4b0e",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/eyemdofniceville',
        targetFile: "index",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "overide.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "faulkner.com",
        proxy: "https://admin.roya.com/sites/Site-d304aa63-65c4-4a8f-8e2a-eb95028cbd74",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/faulkner.com',
        targetFile: "index",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "new_inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "kksmiles.com",
        proxy: "https://admin.roya.com/sites/Site-f7923a4e-c75f-445b-b5f3-4261e8b3b27d",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/kksmiles.com',
        targetFile: "index",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "new_inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.arc32.com",
        proxy: "https://admin.roya.com/sites/Site-e1f9282a-0de1-4a2a-b41a-c8c13905f34c",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/arc32.com',
        targetFile: "index",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "new_inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.pacificsothebysrealty.com",
        proxy: "https://admin.roya.com/sites/Site-f5222e31-4360-4a53-8cef-7b7f6f5884cf",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/www.pacificsothebysrealty.com',
        targetFile: "index-amp-qa-amp",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "new_inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "roya.com",
        proxy: "https://admin.roya.com/sites/Site-267d6cb1-b05a-4c2a-a59f-97c1e8b11b65",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/roya.com',
        targetFile: "landing/new-dental-landing",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "dental_demo.css",
        }
    },
    0: {
        //BASE SITE
        projectName: "REALESTATE THEME 1",
        proxy: "https://admin.roya.com/sites/Site-de0ba2eb-df26-4b79-abf7-5b8f5bef17fa",
        compileAmp: true,
        folderName: 'BASE SITE SASS/REAL ESTATE/REALESTATE THEME 1',
        // targetFile: "email-reviews"
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "claritysurgical-amp.com",
        proxy: "https://admin.roya.com/sites/Site-7fe9650c-46f7-4b46-a14b-13e9d38eb977",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/claritysurgical-amp.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "dental_demo.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "johnkellerdds",
        proxy: "https://admin.roya.com/sites/Site-cc863877-4a09-4000-8c19-181c63172a37",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/johnkellerdds',
        targetFile: "new-our-service",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "overide.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "elpaso",
        proxy: "https://admin.roya.com/sites/Site-c39b9df6-2356-4981-a57f-6bafac63ab95",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/elpaso-eyecare.com',
        targetFile: "landing/landing-pediatric-eye-exams",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "buyinlasvegas",
        proxy: "https://admin.roya.com/sites/Site-42f5d2e7-3441-4b68-b959-a9e4654fd468",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/buyinlasvegas.com',
        targetFile: "search",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.eyesonyouseattle.com",
        proxy: "https://admin.roya.com/sites/Site-ad2fc0f7-67c2-4f98-a832-524e928a5768",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/eyesonyouseattle.com',
        targetFile: "our-team.html",
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.millcreekah.com",
        proxy: "https://admin.roya.com/sites/Site-de805c2a-6240-4768-9987-55c8b933939e",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/www.millcreekah.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edit.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "losangelesdentalarts.com",
        proxy: "https://admin.roya.com/sites/Site-7080fa33-ce22-45e9-9525-23c85107da91",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/losangelesdentalarts.com',
        targetFile: ""
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "planoeye.com",
        proxy: "https://admin.roya.com/sites/Site-833352ff-a47d-4fa9-bae5-fd5127784243",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/planoeye.com',
        targetFile: ""
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "bottsandbotts.com",
        proxy: "https://admin.roya.com/sites/Site-10f83a2a-d35d-4caf-a56e-94903e5a8cd1",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/bottsandbotts.com',
        targetFile: ""
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.sonnygoel.com",
        proxy: "https://admin.roya.com/sites/Site-7b89da9c-7c4a-479d-8433-5f15eb8cd622",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/sonnygoel.com',
        targetFile: ""
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "plasticsurgerylafayette",
        proxy: "https://admin.roya.com/sites/Site-59085b99-8994-4601-af71-ab73c63b2c86",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/plasticsurgerylafayette.com',
        targetFile: "landing/bbl",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "landing.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "luvsdhomes.com",
        proxy: "https://admin.roya.com/sites/Site-a22c4164-b856-4729-9d4f-03a012f198a8",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/luvsdhomes.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.kingsmenmed.com",
        proxy: "https://admin.roya.com/sites/Site-b22e69a5-f6a5-4309-b440-83baa81048f7",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/kingsmenmed.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "rockyridgeanimalclinic.com",
        proxy: "https://admin.roya.com/sites/Site-5d46f7c9-d623-4a68-b600-22116e310d60",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/rockyridgeanimalclinic.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "shepard",
        proxy: "https://admin.roya.com/sites/Site-13b60ca2-5ff8-486f-8ac8-e3953e8fc6b6",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/shepard',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "inject.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "kankakeeanimal.com",
        proxy: "https://admin.roya.com/sites/Site-21ca3605-5d2c-4fde-bb97-4af82cc18309",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/kankakeeanimal.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.petvacx.com",
        proxy: "https://admin.roya.com/sites/Site-affb959a-3281-4abc-a6e9-79a2bcfd3bd5",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/petvacx.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.michellesellssanantonio.com",
        proxy: "https://admin.roya.com/sites/Site-cf7a3139-93a1-459a-9bbf-e6fc5496faf3",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/www.michellesellssanantonio.com',
        targetFile: "blog",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "optical-sanbernardino.com",
        proxy: "https://admin.roya.com/sites/Site-e9d34e8c-f46b-4e3d-ab72-31e28c4e39d2",
        compileAmp: false,
        targetFile: "spanish/office",
        folderName: 'CUSTOM BUILD/optical-sanbernardino.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.altalomaoptometric.com",
        proxy: "https://admin.roya.com/sites/Site-045008c1-cfb2-418f-8530-362a2f558e9e",
        compileAmp: true,
        targetFile: "",
        folderName: 'CUSTOM BUILD/altalomaoptometric.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.pinnacleeyegroup - sylvania.com",
        proxy: "https://admin.roya.com/sites/Site-37d8c615-4871-4fd2-88c3-b403b85a47e4",
        compileAmp: true,
        targetFile: "",
        folderName: 'CUSTOM BUILD/pinnacleeyegroup.com'
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.eyecarewc.com",
        proxy: "https://admin.roya.com/sites/Site-07f523bd-3e66-4ba2-a85b-33210a3ef4c9",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/www.eyecarewc.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "edits-dizzi",
        proxy: "https://admin.roya.com/sites/Site-3b318919-e2ad-46e1-8ea7-bf85d36627ef",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/edits-dizzi.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "viewlajolla.com",
        proxy: "https://admin.roya.com/sites/Site-53a24f4e-cd5b-41ad-bb80-c7a4c5bb2c03",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/viewlajolla.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE
        projectName: "www.shanleyfamilychiro.com",
        proxy: "https://admin.roya.com/sites/Site-d8af2150-f3e9-4f6e-ad79-11a5efa47227",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/shanleyfamilychiro.com',
        targetFile: "",
    },
    0: {
        //CUSTOM OVERIDE -- CUSTOM AMP MODAL / multistep
        projectName: "www.carolinafamilyvision.com",
        proxy: "https://admin.roya.com/sites/Site-2450e80c-f786-47fa-b00e-c02817c9b54c",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/carolinafamilyvision.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE -- CUSTOM AMP 
        projectName: "www.sandiegohomebuys.com",
        proxy: "https://admin.roya.com/sites/Site-4a922e7f-0220-46f9-8678-739e8cb1141f",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/sandiegohomebuys.com',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //CUSTOM OVERIDE -- CUSTOM AMP 
        projectName: "styleye-amp",
        proxy: "https://admin.roya.com/sites/Site-8601a12f-7a2d-4e8b-a28c-6db93feff444",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/styleye-amp',
        targetFile: "",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "edits.css",
        }
    },
    0: {
        //BASE SITE
        projectName: "affordvetcare.com",
        proxy: "https://admin.roya.com/sites/Site-9785b85e-760f-4344-9722-6b73ca956e10",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/affordvetcare.com',
        targetFile: ""
    },
    0: {
        //CUSTOM OVERIDE -- CUSTOM AMP 
        projectName: "landing-elpaso-eyecare.com",
        proxy: "https://admin.roya.com/sites/Site-c39b9df6-2356-4981-a57f-6bafac63ab95",
        compileAmp: true,
        folderName: 'CUSTOM BUILD/landing-elpaso-eyecare.com',
        targetFile: "landing/landing-pediatric-eye-exams.html",
        setOveride: {
            localCSSname: "main.css",
            targetOverideCSSname: "updates.css",
        }
    },
    0: {
        //CUSTOM OVERIDE -- CUSTOM AMP 
        projectName: "internationalopticians.com",
        proxy: "https://admin.roya.com/sites/Site-5285529f-663c-4fb8-8fdb-d7408d094d6b",
        compileAmp: false,
        folderName: 'CUSTOM BUILD/internationalopticians.com',
        targetFile: "",
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "REAL ESTATE THEME 2",
        proxy: "https://admin.roya.com/sites/Site-38017324-8523-438f-b267-b1cad03b240b",
        compileAmp: true,
        targetFile: "",
        folderName: 'BASE SITE SASS/REAL ESTATE/REALESTATE THEME 2'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "REAL ESTATE THEME 3",
        proxy: "https://admin.roya.com/sites/Site-07e5175f-e38f-4bc4-a3a9-af3d145c4ae6",
        compileAmp: true,
        targetFile: "",
        folderName: 'BASE SITE SASS/REAL ESTATE/REALESTATE THEME 3'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.ricksfamilydentistry.com",
        proxy: "https://admin.roya.com/sites/Site-9abe8b73-57ee-431b-9f41-671212ddfc13",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/www.ricksfamilydentistry.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "spectacularspecs.com",
        proxy: "https://admin.roya.com/sites/Site-6610370a-74e8-4b4c-9f69-c7f2b3b79d3f",
        compileAmp: true,
        targetFile: "",
        folderName: 'CUSTOM BUILD/spectacularspecs.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "DENTAL THEME 5",
        proxy: "https://admin.roya.com/sites/Site-bd1519ce-42c6-4f7b-b603-a6d8bcf700f0",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/DENTAL/DENTAL THEME 5'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 6",
        proxy: "https://admin.roya.com/sites/Site-af4cad2f-348c-4135-af06-76df9e963e53",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 6'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 6",
        proxy: "https://admin.roya.com/sites/Site-7906298e-bebc-4675-8dbd-d05e0f1c7ed4",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/VET/VET THEME 6'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "DENTAL THEME 6",
        proxy: "https://admin.roya.com/sites/Site-db786c24-c2df-42ae-a872-7e08ce7b97b0",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/DENTAL/DENTAL THEME 6'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "schmidtchiropracticroseville.com",
        proxy: "https://admin.roya.com/sites/Site-14eb4c29-9cb8-4c31-9c67-2f0480d1b298",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/schmidtchiropracticroseville.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.ellis-chiro.com",
        proxy: "https://admin.roya.com/sites/Site-3366aae5-3d0e-4553-a128-65e80b84d077",
        compileAmp: true,
        targetFile: "",
        folderName: 'CUSTOM BUILD/www.ellis-chiro.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "Mendonanimalclinic.com",
        proxy: "https://admin.roya.com/sites/Site-c81613d7-000e-4ebb-954b-3917570a06d6",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/Mendonanimalclinic.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "OPTO THEME 7",
        proxy: "https://admin.roya.com/sites/Site-3e35cdd6-52b9-4056-9321-1de934282dca",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/OPTO/OPTO THEME 7'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "www.thebendchiropractor.com",
        proxy: "https://admin.roya.com/sites/Site-9b44ef02-768c-4a55-829f-47eab510f501",
        compileAmp: true,
        targetFile: "",
        folderName: 'CUSTOM BUILD/www.thebendchiropractor.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "charlestonchiropracticassociates.com",
        proxy: "https://admin.roya.com/sites/Site-5934e78b-7892-4360-be6a-fb4e0e3645e5",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/charlestonchiropracticassociates.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "VET THEME 7",
        proxy: "https://admin.roya.com/sites/Site-b1b200ee-4cfa-449c-8da7-fe1181b3612a",
        compileAmp: false,
        targetFile: "",
        folderName: 'BASE SITE SASS/VET/VET THEME 7'
    }, 
    0: {
        //BASE SITE STRUCTURE
        projectName: "chirospinecenter.com",
        proxy: "https://admin.roya.com/sites/Site-97455d0d-5a1a-41db-98b8-d913c9e88e4c",
        compileAmp: false,
        targetFile: "",
        folderName: 'CUSTOM BUILD/chirospinecenter.com'
    },
    0: {
        //BASE SITE STRUCTURE
        projectName: "eyecarelimestone.com",
        proxy: "https://admin.roya.com/sites/Site-01b04d94-7321-457d-94d5-160f44f8697f",
        compileAmp: false,
        targetFile: "mighty-eyes",
        folderName: 'CUSTOM BUILD/www.eyecarelimestone.com'
    },

}
/****************MODIFY THIS SECTION ONLY**********************/


/****************IGNORE THIS SECTION**********************/
var settings = {
    globalIncludes: 'sass/includes/', // Sets Global Includes
    targetFile: project[1].compileAmp ? "index-amp" : `${project[1].targetFile}`,
    compileAmp: project[1].compileAmp ? project[1].compileAmp : false,
    folderName: `${project[1].folderName}`, // Sets Custom Path Folder Name

    // SET PROXY FOR LIVE RELOAD
    compiledCSSpath1: 'default.css', // Sets Compiled CSS
    compiledCSSpath2: 'site.css', // Sets Compiled CSS
    compiledCSSpath3: 'color-scheme.css', // Sets Compiled CSS
    compiledCSSpath4: 'amp.css', // Sets Compiled CSS
    compiledCSSpath5: (project[1].setOveride != undefined) ? `${project[1].setOveride.localCSSname}` : "", // Sets Compiled CSS

    // SET Existing file to replace
    fileRemovePath1: `${project[1].proxy}/styles/default.css`,
    fileRemovePath2: `${project[1].proxy}/styles/site.css`,
    fileRemovePath3: `${project[1].proxy}/styles/color_scheme_1.css`,
    fileRemovePath4: `${project[1].proxy}/styles/amp.css`,
    fileRemovePath5: (project[1].setOveride != undefined) ? `${project[1].proxy}/styles/${project[1].setOveride.targetOverideCSSname}` : ""

};
/****************IGNORE THIS SECTION**********************/


/****************IGNORE THIS SECTION**********************/
//compile js - css  single file
gulp.task('useref', function () {
    return gulp.src('build/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('dist/compile/'))

        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('dist/compile/'))
});


gulp.task('images', function () {
    return gulp.src('app/images/**/*.+(png|jpg|jpeg|gif|svg)')
        // Caching images that ran through imagemin
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('dist/images'))
});

/**********************************************************************/
let setFile = () => {
    if (settings.compileAmp) {
        return gulp.src([`sass/${settings.folderName}/amp.scss`])
    } else {
        return gulp.src([`sass/${settings.folderName}/main.scss`])
    }
}
// Compile Styles
gulp.task('compile', function () {
    setFile()
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
        .pipe(sass({
            //outputStyle: 'expanded',
            outputStyle: 'nested',
            // outputStyle: 'compressed',
            includePaths: [`${settings.globalIncludes}`]
        }))
        .pipe(gulpIf(settings.compileAmp, gcmq())) //enable if AMP
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'ff 17', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulpIf(settings.compileAmp, cssnano({ normalizeUrl: { stripWWW: false } }))) //enable if AMP
        .pipe(gulp.dest(`dist/styles/${settings.folderName}`))
    // .pipe(browserSync.stream())
});

let setRewriteRules = () => {
    var obj;
    if (settings.compileAmp) {
        obj = [{
            match: new RegExp(settings.fileRemovePath4),
            fn: function () {
                return `/styles/${settings.folderName}/${settings.compiledCSSpath4}`;
            }
        },];
    } else if (project[1].setOveride != undefined) {
        obj = [{
            match: new RegExp(settings.fileRemovePath5),
            fn: function () {
                return `/styles/${settings.folderName}/${settings.compiledCSSpath5}`;
            }
        }];
    } else {
        obj = [{
            match: new RegExp(settings.fileRemovePath1),
            fn: function () {
                return `/styles/${settings.folderName}/${settings.compiledCSSpath1}`;
            }
        },
        {
            match: new RegExp(settings.fileRemovePath2),
            fn: function () {
                return `/styles/${settings.folderName}/${settings.compiledCSSpath2}`;
            }
        },
        {
            match: new RegExp(settings.fileRemovePath3),
            fn: function () {
                return `/styles/${settings.folderName}/${settings.compiledCSSpath3}`;
            }
        }
        ];
    }
    return obj;
}

gulp.task('browserSync', function () {
    browserSync.init({
        proxy: `${project[1].proxy}/${settings.targetFile}`,
        files: ['./dist'],
        serveStatic: ['./dist'],
        rewriteRules: setRewriteRules()
    });

    gulp.watch(`sass/${settings.folderName}/*.scss`).on('change',
        gulp.parallel('compile', 'split', [browserSync.reload])
    );

});

//Split Compile CSS to multiple Files
gulp.task('split', function () {
    return gulp.src(`dist/styles/${settings.folderName}/main.css`)
        .pipe(splitFiles())
        .pipe(gulp.dest(`dist/styles/${settings.folderName}`));
});

gulp.task('default', gulp.series('browserSync', function () {
    gulp.series('gulp-autoreload');
}));
/****************IGNORE THIS SECTION**********************/


/**

4 different globbing in Node

*.scss

!not-me.scss

*.+(scss|sass)

*/