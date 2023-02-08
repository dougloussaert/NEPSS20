var APP_DATA = {
  "scenes": [
    {
      "id": "0-outside-ss-20",
      "name": "Outside SS 20",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 1.5048529270841966,
        "pitch": -0.03156567616407102,
        "fov": 1.5321493584252945
      },
      "linkHotspots": [
        {
          "yaw": 1.027384029916739,
          "pitch": -0.12532234039415968,
          "rotation": 6.283185307179586,
          "target": "2-production-and-audio-entrance"
        },
        {
          "yaw": 2.140101638103644,
          "pitch": 0.013833698437371922,
          "rotation": 0,
          "target": "7-engineering-evs-and-video-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-production",
      "name": "Production",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.7310762057387237,
        "pitch": 0.3036904487030121,
        "fov": 1.533029385052615
      },
      "linkHotspots": [
        {
          "yaw": -0.04265927311631579,
          "pitch": 0.129155764391097,
          "rotation": 0,
          "target": "2-production-and-audio-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-production-and-audio-entrance",
      "name": "Production and Audio Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.118394639714765,
        "pitch": 0.31062052509307314,
        "fov": 1.5321493584252945
      },
      "linkHotspots": [
        {
          "yaw": -2.942444923551278,
          "pitch": 0.1908277272078962,
          "rotation": 0,
          "target": "1-production"
        },
        {
          "yaw": -1.5455493481893487,
          "pitch": 0.2707814300842504,
          "rotation": 0,
          "target": "3-audio"
        },
        {
          "yaw": -0.41462769798932264,
          "pitch": 0.17496433760278052,
          "rotation": 0,
          "target": "4-evs"
        },
        {
          "yaw": 1.6690605350491916,
          "pitch": -0.013674479049710087,
          "rotation": 0,
          "target": "0-outside-ss-20"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-audio",
      "name": "Audio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1273968474314966,
        "pitch": 0.20379874913831308,
        "fov": 1.5321493584252945
      },
      "linkHotspots": [
        {
          "yaw": 1.5811141396103716,
          "pitch": 0.24736745123823312,
          "rotation": 0,
          "target": "2-production-and-audio-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-evs",
      "name": "EVS",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0036873153211161025,
        "pitch": 0.1918221859201239,
        "fov": 1.5122920319125557
      },
      "linkHotspots": [
        {
          "yaw": -1.9727874279646045,
          "pitch": 0.19921666232284352,
          "rotation": 0,
          "target": "2-production-and-audio-entrance"
        },
        {
          "yaw": 1.3137776765518403,
          "pitch": 0.08797191163312945,
          "rotation": 0,
          "target": "6-engineering"
        },
        {
          "yaw": 1.888845474397863,
          "pitch": 0.01427811820720315,
          "rotation": 0,
          "target": "5-video"
        },
        {
          "yaw": 2.3643882522477346,
          "pitch": 0.1583775076600844,
          "rotation": 0,
          "target": "7-engineering-evs-and-video-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-video",
      "name": "Video",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.08849563631661184,
        "pitch": 0.24766915144117263,
        "fov": 1.5321493584252945
      },
      "linkHotspots": [
        {
          "yaw": -1.6415671725827803,
          "pitch": 0.171371400061048,
          "rotation": 0,
          "target": "7-engineering-evs-and-video-entrance"
        },
        {
          "yaw": -1.164217011094001,
          "pitch": 0.13304008091226116,
          "rotation": 0,
          "target": "4-evs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-engineering",
      "name": "Engineering",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.12522189541761,
        "pitch": 0.6428796296218415,
        "fov": 1.5321493584252945
      },
      "linkHotspots": [
        {
          "yaw": -1.8083889861508595,
          "pitch": 0.14952851798480182,
          "rotation": 0,
          "target": "4-evs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-engineering-evs-and-video-entrance",
      "name": "Engineering, EVS and Video Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.14559893860107564,
        "pitch": 0.2986598590908258,
        "fov": 1.5321493584252945
      },
      "linkHotspots": [
        {
          "yaw": 1.102435090865697,
          "pitch": 0.1683840287951881,
          "rotation": 0,
          "target": "5-video"
        },
        {
          "yaw": 0.29270260334372544,
          "pitch": 0.07338889720159614,
          "rotation": 0,
          "target": "6-engineering"
        },
        {
          "yaw": -0.6101437269283796,
          "pitch": 0.1714247087487628,
          "rotation": 0,
          "target": "4-evs"
        },
        {
          "yaw": -1.3755867176623404,
          "pitch": 0.051418981845229084,
          "rotation": 0,
          "target": "2-production-and-audio-entrance"
        },
        {
          "yaw": 3.0649451852766205,
          "pitch": 0.3721520420971256,
          "rotation": 0,
          "target": "0-outside-ss-20"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "NEP SS 20",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
