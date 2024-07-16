import type { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Config["sidebar"] = {
  "/frontend/": [
    {
      text: "HTML",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/html/" }],
    },
    {
      text: "CSS",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/css/" }],
    },
    {
      text: "JavaScript",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/javaScript/" }],
    },
    {
      text: "TypeScript",
      collapsed: false,
      items: [{ text: "基础知识", link: "/frontend/typeScript/" }],
    },
    {
      text: "面试题",
      link: "/frontend/interview-questions",
    },
  ],
  "/webGL/": [
    {
      text: "three.js",
      collapsed: false,
      items: [
        { text: "简介", link: "/webGL/three/intro" },
        { text: "入门指南", link: "/webGL/three/getting-started" },
        {
          text: "核心",
          collapsed: false,
          items: [
            {
              text: "BufferGeometry",
              link: "/webGL/three/core/BufferGeometry",
            },
            { text: "Object3D", link: "/webGL/three/core/Object3D" },
          ],
        },
        {
          text: "摄像机",
          collapsed: false,
          items: [
            {
              text: "ArrayCamera",
              link: "/webGL/three/cameras/ArrayCamera",
            },
            {
              text: "Camera",
              link: "/webGL/three/cameras/Camera",
            },
            {
              text: "CubeCamera",
              link: "/webGL/three/cameras/CubeCamera",
            },
            {
              text: "OrthographicCamera",
              link: "/webGL/three/cameras/OrthographicCamera",
            },
            {
              text: "PerspectiveCamera",
              link: "/webGL/three/cameras/PerspectiveCamera",
            },
            {
              text: "StereoCamera",
              link: "/webGL/three/cameras/StereoCamera",
            },
          ],
        },
        {
          text: "几何体",
          collapsed: false,
          items: [
            {
              text: "BoxGeometry",
              link: "/webGL/three/geometries/BoxGeometry",
            },
            {
              text: "CapsuleGeometry",
              link: "/webGL/three/geometries/CapsuleGeometry",
            },
            {
              text: "CircleGeometry",
              link: "/webGL/three/geometries/CircleGeometry",
            },
            {
              text: "ConeGeometry",
              link: "/webGL/three/geometries/ConeGeometry",
            },
            {
              text: "CylinderGeometry",
              link: "/webGL/three/geometries/CylinderGeometry",
            },
            {
              text: "DodecahedronGeometry",
              link: "/webGL/three/geometries/DodecahedronGeometry",
            },
            {
              text: "EdgesGeometry",
              link: "/webGL/three/geometries/EdgesGeometry",
            },
            {
              text: "ExtrudeGeometry",
              link: "/webGL/three/geometries/ExtrudeGeometry",
            },
            {
              text: "IcosahedronGeometry",
              link: "/webGL/three/geometries/IcosahedronGeometry",
            },
            {
              text: "LatheGeometry",
              link: "/webGL/three/geometries/LatheGeometry",
            },
            {
              text: "OctahedronGeometry",
              link: "/webGL/three/geometries/OctahedronGeometry",
            },
            {
              text: "PlaneGeometry",
              link: "/webGL/three/geometries/PlaneGeometry",
            },
            {
              text: "PolyhedronGeometry",
              link: "/webGL/three/geometries/PolyhedronGeometry",
            },
            {
              text: "RingGeometry",
              link: "/webGL/three/geometries/RingGeometry",
            },
            {
              text: "ShapeGeometry",
              link: "/webGL/three/geometries/ShapeGeometry",
            },
            {
              text: "SphereGeometry",
              link: "/webGL/three/geometries/SphereGeometry",
            },
            {
              text: "TetrahedronGeometry",
              link: "/webGL/three/geometries/TetrahedronGeometry",
            },
            {
              text: "TorusGeometry",
              link: "/webGL/three/geometries/TorusGeometry",
            },
            {
              text: "TorusKnotGeometry",
              link: "/webGL/three/geometries/TorusKnotGeometry",
            },
            {
              text: "TubeGeometry",
              link: "/webGL/three/geometries/TubeGeometry",
            },
            {
              text: "WireframeGeometry",
              link: "/webGL/three/geometries/WireframeGeometry",
            },
          ],
        },
      ],
    },
  ],
  "/life/": [
    {
      text: "Life",
      collapsed: false,
      items: [{ text: "生活记录", link: "/life/" }],
    },
  ],
};
