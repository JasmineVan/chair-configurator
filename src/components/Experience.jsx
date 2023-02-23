import { PresentationControls, Stage } from "@react-three/drei";
import { BoxGeometry, Mesh } from "three";

const Experience = () => {
    return (
        <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={"city"} intensity={0.6} contactShadow={false}>
                <mesh>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshStandardMaterial />
                </mesh>
            </Stage>
        </PresentationControls>

    );
};

export default Experience;