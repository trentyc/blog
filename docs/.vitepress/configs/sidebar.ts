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
          collapsed: true,
          items: [
            {
              text: "BufferAttribute",
              link: "/webGL/three/core/BufferAttribute",
            },
            {
              text: "BufferGeometry",
              link: "/webGL/three/core/BufferGeometry",
            },
            {
              text: "Object3D",
              link: "/webGL/three/core/Object3D",
            },
            {
              text: "Clock",
              link: "/webGL/three/core/Clock",
            },
            {
              text: "EventDispatcher",
              link: "/webGL/three/core/EventDispatcher",
            },
            {
              text: "Uniform",
              link: "/webGL/three/core/Uniform",
            },
          ],
        },
        {
          text: "灯光",
          collapsed: true,
          items: [
            {
              text: "Light",
              link: "/webGL/three/lights/Light",
            },
            {
              text: "AmbientLight",
              link: "/webGL/three/lights/AmbientLight",
            },
            {
              text: "DirectionalLight",
              link: "/webGL/three/lights/DirectionalLight",
            },
            {
              text: "HemisphereLight",
              link: "/webGL/three/lights/HemisphereLight",
            },
            {
              text: "LightProbe",
              link: "/webGL/three/lights/LightProbe",
            },
            {
              text: "PointLight",
              link: "/webGL/three/lights/PointLight",
            },
            {
              text: "RectAreaLight",
              link: "/webGL/three/lights/RectAreaLight",
            },
            {
              text: "SpotLight",
              link: "/webGL/three/lights/SpotLight",
            },
          ],
        },
        {
          text: "灯光/阴影",
          collapsed: true,
          items: [
            {
              text: "LightShadow",
              link: "/webGL/three/lights/shadows/LightShadow",
            },
            {
              text: "PointLightShadow",
              link: "/webGL/three/lights/shadows/PointLightShadow",
            },
            {
              text: "DirectionalLightShadow",
              link: "/webGL/three/lights/shadows/DirectionalLightShadow",
            },
            {
              text: "SpotLightShadow",
              link: "/webGL/three/lights/shadows/SpotLightShadow",
            },
          ],
        },
        {
          text: "摄像机",
          collapsed: true,
          items: [
            {
              text: "Camera",
              link: "/webGL/three/cameras/Camera",
            },
            {
              text: "ArrayCamera",
              link: "/webGL/three/cameras/ArrayCamera",
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
          collapsed: true,
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
        {
          text: "加载器",
          collapsed: true,
          items: [
            { text: "Loader", link: "/webGL/three/loaders/Loader" },
            {
              text: "TextureLoader",
              link: "/webGL/three/loaders/TextureLoader",
            },
            { text: "GLTFLoader", link: "/webGL/three/loaders/GLTFLoader" },
          ],
        },
        {
          text: "材质",
          collapsed: true,
          items: [
            { text: "Material", link: "/webGL/three/materials/Material" },
            {
              text: "LineBasicMaterial",
              link: "/webGL/three/materials/LineBasicMaterial",
            },
            {
              text: "LineDashedMaterial",
              link: "/webGL/three/materials/LineDashedMaterial",
            },
            {
              text: "MeshBasicMaterial",
              link: "/webGL/three/materials/MeshBasicMaterial",
            },
            {
              text: "MeshDepthMaterial",
              link: "/webGL/three/materials/MeshDepthMaterial",
            },
            {
              text: "MeshDistanceMaterial",
              link: "/webGL/three/materials/MeshDistanceMaterial",
            },
            {
              text: "MeshLambertMaterial",
              link: "/webGL/three/materials/MeshLambertMaterial",
            },
            {
              text: "MeshNormalMaterial",
              link: "/webGL/three/materials/MeshNormalMaterial",
            },
            {
              text: "MeshPhongMaterial",
              link: "/webGL/three/materials/MeshPhongMaterial",
            },
            {
              text: "PointsMaterial",
              link: "/webGL/three/materials/PointsMaterial",
            },
            {
              text: "RawShaderMaterial",
              link: "/webGL/three/materials/RawShaderMaterial",
            },
            {
              text: "ShaderMaterial",
              link: "/webGL/three/materials/ShaderMaterial",
            },
            {
              text: "ShadowMaterial",
              link: "/webGL/three/materials/ShadowMaterial",
            },
            {
              text: "SpriteMaterial",
              link: "/webGL/three/materials/SpriteMaterial",
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
      items: [{ text: "资本主义的本质", link: "/life/capitalism" }],
    },
  ],
  "/NCRE/": [
    {
      text: "选择题",
      link: "/NCRE/MCQ/",
    },
    {
      text: "案例分析",
      link: "/NCRE/CAQ/",
    },
    {
      text: "论文",
      link: "/NCRE/ESSAY/",
    },
  ],
};
