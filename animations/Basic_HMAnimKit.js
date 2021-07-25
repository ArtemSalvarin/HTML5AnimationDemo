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
                            rect: ['204px', '52px', '142px', '142px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            fill: ["rgba(46,49,90,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
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
                            rect: ['274px', '193px', '1px', '96px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3',
                            type: 'rect',
                            rect: ['176px', '219px', '99px', '1px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4',
                            type: 'rect',
                            rect: ['176px', '220px', '1px', '69px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle3Copy',
                            type: 'rect',
                            rect: ['274px', '219px', '99px', '1px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle4Copy2',
                            type: 'rect',
                            rect: ['372px', '220px', '1px', '69px', 'auto', 'auto'],
                            fill: ["rgba(46,49,90,0.00)"],
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
                    duration: 1000,
                    autoPlay: true,
                    data: [
                        [
                            "eid18",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Ellipse2}",
                            'rgba(231,196,47,0.00)',
                            'rgba(231,196,47,1)'
                        ],
                        [
                            "eid12",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle4Copy2}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ],
                        [
                            "eid8",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle2}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ],
                        [
                            "eid9",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle4}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ],
                        [
                            "eid11",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle3}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ],
                        [
                            "eid17",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Ellipse2Copy}",
                            'rgba(231,196,47,0.00)',
                            'rgba(231,196,47,1)'
                        ],
                        [
                            "eid10",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle3Copy}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ],
                        [
                            "eid16",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Ellipse2Copy2}",
                            'rgba(231,196,47,0.00)',
                            'rgba(231,196,47,1)'
                        ],
                        [
                            "eid2",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            'rgba(46,49,90,0.00)',
                            'rgba(46,49,90,1)'
                        ]
                    ]
                }
            }
        };

    AdobeHMAnimKit.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.HMAnimKit_authoring_mode) AdobeHMAnimKit.getComposition(compId).load("Basic_HMAnimKitActions.js");
})("HMAnimKit-3248372");
