import { Collapse, CollapsePanel } from ".";

export default {
    title: "Atoms/Collapse",
};

export const Default = () => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
    return (
        <Collapse>
            <CollapsePanel header="Panel 1" key="1">
                <p>{text}</p>
            </CollapsePanel>
        </Collapse>
    );
};
