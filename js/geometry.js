let canvas = document.getElementById('canvas');
    canvas.width = 600;
    canvas.height = 500;

    // Создание движка и сцены
    let engine = new BABYLON.Engine(canvas, true);
    let scene = new BABYLON.Scene(engine);

    // Создание камеры
    let camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 3, 15, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    camera.setTarget(BABYLON.Vector3.Zero());

    // Создание света
    let light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 0.7;

    // Функция создания системы координат
    function createCoordinateSystem(size, scene) {
        let axisX = BABYLON.MeshBuilder.CreateLines("axisX", {
            points: [
                new BABYLON.Vector3(0, 0, 0),
                new BABYLON.Vector3(size, 0, 0)
            ]
        }, scene);
        axisX.color = new BABYLON.Color3(1, 0, 0);

        let axisY = BABYLON.MeshBuilder.CreateLines("axisY", {
            points: [
                new BABYLON.Vector3(0, 0, 0),
                new BABYLON.Vector3(0, size, 0)
            ]
        }, scene);
        axisY.color = new BABYLON.Color3(0, 1, 0);

        let axisZ = BABYLON.MeshBuilder.CreateLines("axisZ", {
            points: [
                new BABYLON.Vector3(0, 0, 0),
                new BABYLON.Vector3(0, 0, size)
            ]
        }, scene);
        axisZ.color = new BABYLON.Color3(0, 0, 1);
    }

    // Инициализация системы координат
    createCoordinateSystem(10, scene);

    // Запуск рендер-лупа
    engine.runRenderLoop(() => {
        scene.render();
    });

    // Обработка изменения размера окна
    window.addEventListener('resize', () => {
        engine.resize();
    });