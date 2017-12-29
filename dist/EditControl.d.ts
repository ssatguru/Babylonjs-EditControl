/// <reference types="babylonjs" />
declare namespace org.ssatguru.babylonjs.component {
    import AbstractMesh = BABYLON.AbstractMesh;
    import Camera = BABYLON.Camera;
    import Color3 = BABYLON.Color3;
    import Material = BABYLON.Material;
    import Matrix = BABYLON.Matrix;
    import Mesh = BABYLON.Mesh;
    import Vector3 = BABYLON.Vector3;
    class EditControl {
        private mesh;
        private canvas;
        private scene;
        private mainCamera;
        private ecRoot;
        private local;
        private snapT;
        private snapR;
        private transSnap;
        private rotSnap;
        private axesLen;
        private axesScale;
        private redMat;
        private greenMat;
        private blueMat;
        private whiteMat;
        private yellowMat;
        private actHist;
        private renderer;
        private pointerdown;
        private pointerup;
        private pointermove;
        private visibility;
        constructor(mesh: Mesh, camera: Camera, canvas: HTMLCanvasElement, scale: number, eulerian?: boolean);
        private checkQuaternion();
        distFromCamera: number;
        cameraTOec: Vector3;
        cameraNormal: Vector3;
        private setAxesScale();
        private setAxesRotation();
        ecMatrix: Matrix;
        ecTOcamera: Vector3;
        private rotRotGuides();
        private renderLoopProcess();
        switchTo(mesh: Mesh, eulerian?: boolean): void;
        setUndoCount(c: number): void;
        undo(): void;
        redo(): void;
        detach(): void;
        disposeAll(): void;
        private actionListener;
        private actionStartListener;
        private actionEndListener;
        addActionListener(actionListener: (actionType: number) => void): void;
        removeActionListener(): void;
        addActionStartListener(actionStartListener: (actionType: number) => void): void;
        removeActionStartListener(): void;
        addActionEndListener(actionEndListener: (actionType: number) => void): void;
        removeActionEndListener(): void;
        removeAllActionListeners(): void;
        private pDown;
        private axisPicked;
        private onPointerDown(evt);
        private setEditing(editing);
        isEditing(): boolean;
        private detachControl(cam, can);
        private prevOverMesh;
        private pointerIsOver;
        isPointerOver(): boolean;
        savedMat: Material;
        savedCol: Color3;
        private onPointerOver();
        private clearPrevOverMesh();
        private restoreColor(mesh);
        editing: boolean;
        private onPointerUp(evt);
        actionType: number;
        private setActionType();
        private callActionListener(at);
        private callActionStartListener(at);
        private callActionEndListener(at);
        private prevPos;
        private snapRX;
        private snapRY;
        private snapRZ;
        private onPointerMove(evt);
        private snapTV;
        private transBy;
        private getPickPlane(axis);
        private doTranslation(diff);
        private transWithSnap(mesh, trans, local);
        snapS: boolean;
        snapSX: number;
        snapSY: number;
        snapSZ: number;
        snapSA: number;
        snapSV: Vector3;
        scaleSnap: number;
        scale: Vector3;
        private doScaling(diff);
        private scaleWithSnap(mesh, p);
        private boundingDimesion;
        private getBoundingDimension(mesh);
        refreshBoundingInfo(): void;
        eulerian: boolean;
        snapRA: number;
        cN: Vector3;
        rotAxis: Vector3;
        private doRotation(mesh, axis, newPos, prevPos);
        private getPosOnPickPlane();
        private hideBaxis();
        private setAxesVisiblity(v);
        private transEnabled;
        isTranslationEnabled(): boolean;
        enableTranslation(): void;
        disableTranslation(): void;
        private rotEnabled;
        isRotationEnabled(): boolean;
        returnEuler(euler: boolean): void;
        enableRotation(): void;
        disableRotation(): void;
        private scaleEnabled;
        isScalingEnabled(): boolean;
        enableScaling(): void;
        disableScaling(): void;
        private scaleBoundsMin;
        private scaleBoundsMax;
        setScaleBounds(min?: Vector3, max?: Vector3): void;
        removeScaleBounds(): void;
        private transBoundsMin;
        private transBoundsMax;
        setTransBounds(min?: Vector3, max?: Vector3): void;
        removeTransBounds(): void;
        private rotBoundsMin;
        private rotBoundsMax;
        setRotBounds(min?: Vector3, max?: Vector3): void;
        removeRotBounds(): void;
        private bXaxis;
        private bYaxis;
        private bZaxis;
        private xaxis;
        private yaxis;
        private zaxis;
        private createGuideAxes();
        private pickPlane;
        private pALL;
        private pXZ;
        private pZY;
        private pYX;
        private createPickPlanes();
        private tCtl;
        private tX;
        private tY;
        private tZ;
        private tXZ;
        private tZY;
        private tYX;
        private tAll;
        private tEndX;
        private tEndY;
        private tEndZ;
        private tEndXZ;
        private tEndZY;
        private tEndYX;
        private tEndAll;
        private createTransAxes();
        private createTriangle(name, w, scene);
        private rCtl;
        private rX;
        private rY;
        private rZ;
        private rAll;
        private rEndX;
        private rEndY;
        private rEndZ;
        private rEndAll;
        private rEndAll2;
        private guideSize;
        setRotGuideFull(y: boolean): void;
        private createRotAxes();
        private extrudeBox(w, l);
        private createCircle(r, t, double);
        private createTube(r, t?);
        private sCtl;
        private sX;
        private sY;
        private sZ;
        private sXZ;
        private sZY;
        private sYX;
        private sAll;
        private sEndX;
        private sEndY;
        private sEndZ;
        private sEndXZ;
        private sEndZY;
        private sEndYX;
        private sEndAll;
        private createScaleAxes();
        private localX;
        private localY;
        private localZ;
        private setLocalAxes(mesh);
        setLocal(l: boolean): void;
        isLocal(): boolean;
        setTransSnap(s: boolean): void;
        setRotSnap(s: boolean): void;
        setScaleSnap(s: boolean): void;
        tSnap: Vector3;
        setTransSnapValue(t: number): void;
        setRotSnapValue(r: number): void;
        setScaleSnapValue(r: number): void;
        private static getAngle(p1, p2, p, cN);
        private createMaterials(scene);
        private disposeMaterials();
        private static getStandardMaterial(name, col, scene);
    }
    class ActHist {
        private mesh;
        private lastMax;
        private acts;
        private last;
        private current;
        constructor(mesh: AbstractMesh, capacity: number);
        setCapacity(c: number): void;
        add(at?: number): void;
        undo(): number;
        redo(): number;
    }
    class Act {
        private p;
        private rQ;
        private rE;
        private s;
        private at;
        constructor(mesh: AbstractMesh, at: number);
        getActionType(): number;
        perform(mesh: AbstractMesh): void;
    }
}
