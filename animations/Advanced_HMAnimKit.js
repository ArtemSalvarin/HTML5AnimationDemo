/*jslint */
/*global AdobeHMAnimKit: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "width",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Ellipse',
                            type: 'ellipse',
                            rect: ['204px', '0px', '142px', '142px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(46,49,90,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'EllipseCopy',
                            type: 'ellipse',
                            rect: ['214px', '61px', '122px', '122px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(155,146,129,1)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'Ellipse2',
                            type: 'ellipse',
                            rect: ['167px', '289px', '19px', '19px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(231,196,47,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy',
                            type: 'ellipse',
                            rect: ['265px', '289px', '19px', '19px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(231,196,47,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Ellipse2Copy2',
                            type: 'ellipse',
                            rect: ['363px', '289px', '19px', '19px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(231,196,47,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle2',
                            type: 'rect',
                            rect: ['274px', '193px', '1px', '0px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['275px', '219px', '0px', '1px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['176px', '220px', '1px', '0px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['274px', '219px', '0px', '1px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy2',
                            type: 'rect',
                            rect: ['372px', '220px', '1px', '0px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "background-color",
                            0,
                            500,
                            "easeOutQuart",
                            "${Ellipse}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ],
                        [
                            "eid81",
                            "left",
                            611,
                            284,
                            "linear",
                            "${Rectangle3}",
                            '275px',
                            '176px'
                        ],
                        [
                            "eid86",
                            "height",
                            895,
                            355,
                            "linear",
                            "${Rectangle4}",
                            '0px',
                            '69px'
                        ],
                        [
                            "eid57",
                            "height",
                            500,
                            395,
                            "linear",
                            "${Rectangle2}",
                            '0px',
                            '96px'
                        ],
                        [
                            "eid121",
                            "background-color",
                            1900,
                            600,
                            "easeOutExpo",
                            "${EllipseCopy}",
                            'rgba(155,146,129,1)',
                            'rgba(231,196,47,1.00)'
                        ],
                        [
                            "eid80",
                            "width",
                            611,
                            284,
                            "linear",
                            "${Rectangle3}",
                            '0px',
                            '99px'
                        ],
                        [
                            "eid16",
                            "background-color",
                            1250,
                            500,
                            "linear",
                            "${Ellipse2Copy2}",
                            'rgba(231,196,47,0.00)',
                            'rgba(231,196,47,1)'
                        ],
                        [
                            "eid87",
                            "height",
                            895,
                            355,
                            "linear",
                            "${Rectangle4Copy2}",
                            '0px',
                            '69px'
                        ],
                        [
                            "eid18",
                            "background-color",
                            1250,
                            500,
                            "linear",
                            "${Ellipse2}",
                            'rgba(231,196,47,0.00)',
                            'rgba(231,196,47,1)'
                        ],
                        [
                            "eid19",
                            "-webkit-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid132",
                            "-moz-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid133",
                            "-ms-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid134",
                            "msTransformOrigin",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid135",
                            "-o-transform-origin",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid136",
                            "transform-origin",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            [50,50],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid112",
                            "scaleX",
                            1500,
                            500,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid24",
                            "top",
                            0,
                            500,
                            "easeOutQuart",
                            "${Ellipse}",
                            '0px',
                            '51px'
                        ],
                        [
                            "eid17",
                            "background-color",
                            895,
                            355,
                            "linear",
                            "${Ellipse2Copy}",
                            'rgba(231,196,47,0.00)',
                            'rgba(231,196,47,1)'
                        ],
                        [
                            "eid21",
                            "scaleX",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            1500,
                            500,
                            "linear",
                            "${EllipseCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid20",
                            "scaleY",
                            500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '1',
                            '1'
                        ],
                        [
                            "eid68",
                            "width",
                            611,
                            284,
                            "linear",
                            "${Rectangle3Copy}",
                            '0px',
                            '99px'
                        ]
                    ]
                }
            }
        };

    AdobeHMAnimKit.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.HMAnimKit_authoring_mode) AdobeHMAnimKit.getComposition(compId).load("Advanced_HMAnimKitActions.js");
})("HMAnimKit-3248372");
