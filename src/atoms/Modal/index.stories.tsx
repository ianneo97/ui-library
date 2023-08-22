import { useMemo, useState } from "react";
import { Modal, StepModal } from ".";
import { Button } from "../Button";
import { Text, TextBase } from "../Typography";
import { Card } from "../Card";
import { AddTable } from "../Table";
import { useForm } from "../Form";
import { Select } from "../Select";

export default {
    title: "Atoms/Modal",
};

export const Default = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    return (
        <>
            <Button onClick={toggle}>Open</Button>
            <Modal open={open} cancelFn={toggle} title="Some Title">
                <p>Some contents...</p>
            </Modal>
        </>
    );
};

export enum SupportDocType {
    AUDIT_REPORT = "AUDIT_REPORT",
    BILL_OF_LADING = "BILL_OF_LADING",
    CERTIFICATE_OF_ORIGIN = "CERTIFICATE_OF_ORIGIN",
    CERTIFICATION_RECORD = "CERTIFICATION_RECORD",
    PRODUCT_CERTIFICATE = "PRODUCT_CERTIFICATE",
    COMMERCIAL_INVOICE = "COMMERCIAL_INVOICE",
    CONTRACT = "CONTRACT",
    CUSTOM_CLEARANCE = "CUSTOM_CLEARANCE",
    DELIVERY_NOTE = "DELIVERY_NOTE",
    INVOICE = "INVOICE",
    MAP_SCREENSHOT = "MAP_SCREENSHOT",
    PACKING_LIST = "PACKING_LIST",
    PAYMENT_VOUCHER = "PAYMENT_VOUCHER",
    PURCHASE_CONTRACT = "PURCHASE_CONTRACT",
    PRODUCTION_RECORD = "PRODUCTION_RECORD",
    PRODUCT_SPECIFICATIONS = "PRODUCT_SPECIFICATIONS",
    TRANPORTATION_INVOICE = "TRANPORTATION_INVOICE",
    WAREHOUSE_RECORD = "WAREHOUSE_RECORD",
    OTHER = "OTHER",
}

/**
 * @enum
 * @name SupplyChainNodeType
 * @description The descriptor for the company nature in the supply chain
 * @author Mark Leung <markleungcl@lfxdigital.com>
 */
export enum SupplyChainNodeType {
    AGENT = "AGENT",
    ALUMINIUM_EXTRUSION = "ALUMINIUM_EXTRUSION",
    ASSEMBLY = "ASSEMBLY",
    BEAM_HOUSE = "BEAM_HOUSE",
    BRAND = "BRAND",
    BUTTON_SUPPLIER = "BUTTON_SUPPLIER",
    CARE_LABEL_SUPPLIER = "CARE_LABEL_SUPPLIER",
    CASTING = "CASTING",
    CHEMICAL_SUPPLIER_FABRIC_PROCESSING = "CHEMICAL_SUPPLIER_FABRIC_PROCESSING",
    CHEMICAL_SUPPLIER_RAW_MATERIAL_PROCESSING = "CHEMICAL_SUPPLIER_RAW_MATERIAL_PROCESSING",
    CHEMICAL_SUPPLIER_RECYCLER = "CHEMICAL_SUPPLIER_RECYCLER",
    CHEMICAL_SUPPLIER_YARN_PROCESSING = "CHEMICAL_SUPPLIER_YARN_PROCESSING",
    COMBING_MILL = "COMBING_MILL",
    CRUSTING_TANNERY = "CRUSTING_TANNERY",
    CUSHION_SUPPLIER = "CUSHION_SUPPLIER",
    CUT_MAKE_TRIM = "CUT_MAKE_TRIM",
    DISTRIBUTOR = "DISTRIBUTOR",
    ELASTIC_RIBBON_SUPPLIER = "ELASTIC_RIBBON_SUPPLIER",
    ELASTICS_AND_RIBBON_SUPPLIER = "ELASTICS_AND_RIBBON_SUPPLIER",
    EMBROIDERER = "EMBROIDERER",
    FABRIC_COATING = "FABRIC_COATING",
    FABRIC_DYEING = "FABRIC_DYEING",
    FABRIC_FINISHING = "FABRIC_FINISHING",
    FABRIC_MILL = "FABRIC_MILL",
    FABRIC_PRINTING = "FABRIC_PRINTING",
    FABRIC_TRADING = "FABRIC_TRADING",
    FARM = "FARM",
    FINISHED_GOODS_FACTORY = "FINISHED_GOODS_FACTORY",
    FINISHED_GOODS_TRADER = "FINISHED_GOODS_TRADER",
    FOAM_SUPPLIER = "FOAM_SUPPLIER",
    FULFILLMENT_CENTER = "FULFILLMENT_CENTER",
    GARMENT_CHEMCIAL_SUPPLIER = "GARMENT_CHEMCIAL_SUPPLIER",
    GARMENT_FINISHING = "GARMENT_FINISHING",
    GARMENT_PRINTER = "GARMENT_PRINTER",
    GINNIMG_MILL = "GINNIMG_MILL",
    HANGTAG_SUPPLIER = "HANGTAG_SUPPLIER",
    INJECTION_MOLD_FACTORY = "INJECTION_MOLD_FACTORY",
    KNITTING_MILL = "KNITTING_MILL",
    LABEL_SUPPLIER = "LABEL_SUPPLIER",
    LASER_PROCESSING = "LASER_PROCESSING",
    LACES_SUPPLIER = "LACES_SUPPLIER",
    LAUNDRY = "LAUNDRY",
    LEATHER_CHEMICAL_SUPPLIER = "LEATHER_CHEMICAL_SUPPLIER",
    LEATHER_FINISHIHG = "LEATHER_FINISHIHG",
    LEATHER_TANNER = "LEATHER_TANNER",
    LEATHER_TRADER = "LEATHER_TRADER",
    LINING_SUPPLIER = "LINING_SUPPLIER",
    MATERIAL_CALENDERING = "MATERIAL_CALENDERING",
    METAL_GOODS_FACTORY = "METAL_GOODS_FACTORY",
    MINE = "MINE",
    OTHERS = "OTHERS",
    PACKAGING_MATERIAL_SUPPLIER = "PACKAGING_MATERIAL_SUPPLIER",
    PACKAGING_SUPPLIER = "PACKAGING_SUPPLIER",
    PATTERN_MAKING = "PATTERN_MAKING",
    PATCH_SUPPLIER = "PATCH_SUPPLIER",
    PLATING = "PLATING",
    POCKET_SUPPLIER = "POCKET_SUPPLIER",
    POLISHING = "POLISHING",
    PRINTER = "PRINTER",
    QUALITY_ASSURANCE = "QUALITY_ASSURANCE",
    RANCH = "RANCH",
    RAW_MATERIAL_PRODUCER = "RAW_MATERIAL_PRODUCER",
    RAW_MATERIAL_SUPPLIER = "RAW_MATERIAL_SUPPLIER",
    RAW_MATERIAL_TRADING = "RAW_MATERIAL_TRADING",
    RECYCLING_FACILITY = "RECYCLING_FACILITY",
    REFINERY = "REFINERY",
    RETAILER = "RETAILER",
    RIVET_SUPPLIER = "RIVET_SUPPLIER",
    SEWING = "SEWING",
    SLAUTHER_HOUSE = "SLAUTHER_HOUSE",
    SOLE_SUPPLIER = "SOLE_SUPPLIER",
    SOURCING_AGENCY = "SOURCING_AGENCY",
    SPINNING_MILL = "SPINNING_MILL",
    THREAD_SUPPLIER = "THREAD_SUPPLIER",
    TOP_MAKING = "TOP_MAKING",
    TANNERY = "TANNERY",
    WET_BLUE_TANNERY = "WET_BLUE_TANNERY",
    WET_WHITE_TANNERY = "WET_WHITE_TANNERY",
    WEAVING_MILL = "WEAVING_MILL",
    WHOLESALER = "WHOLESALER",
    YARN_DYEING = "YARN_DYEING",
    YARN_SPINNER = "YARN_SPINNER",
    YARN_TRADING = "YARN_TRADING",
    ZIPPER_SUPPLIER = "ZIPPER_SUPPLIER",
    ZIPPER_TRADING = "ZIPPER_TRADING",
}

export const ExampleStepContent = () => {
    const [form] = useForm();
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen((prev) => !prev);
    };

    const columns = useMemo(
        () => [
            {
                title: "ruleset:modal.add.documentType",
                dataIndex: "document",
                component: (
                    <Select
                        options={Object.values(SupportDocType)
                            .filter(
                                (x) => x !== SupportDocType.PRODUCT_CERTIFICATE
                            )
                            .map((x) => ({
                                label: x,
                                value: x,
                                key: x,
                            }))}
                        getPopupContainer={undefined}
                    />
                ),
                width: "30%",
                required: true,
            },
            {
                title: "ruleset:modal.add.appliesTo",
                dataIndex: "appliesTo",
                component: (
                    <Select
                        mode="tags"
                        options={Object.values(SupplyChainNodeType).map(
                            (x) => ({
                                label: x,
                                value: x,
                                key: x,
                            })
                        )}
                        maxTagCount={"responsive"}
                        getPopupContainer={undefined}
                    />
                ),
                mode: "tags",
                required: true,
            },
        ],
        []
    );

    const content = [
        {
            title: (
                <Text style={{ wordBreak: "break-all" }}>
                    "FFirstFirstFirstFirstFirst
                    FirstirstFirstFirstFirstFirstFirst"
                </Text>
            ),
            content: <Text>First Content</Text>,
            // description: "First description that is so stupidly liong",
        },
        {
            title: "Second",
            content: (
                <AddTable
                    form={form}
                    columns={columns}
                    scroll={{ x: "max-content" }}
                />
            ),
        },
    ];

    return (
        <>
            <Button onClick={toggle}>Open</Button>
            <Card>
                <StepModal
                    width={"70vw"}
                    open={true}
                    cancelFn={toggle}
                    title="Some Title"
                    subtitle="If a product has been already traced, the changes will immediately be reflected in past orders
                Thus, be careful to update the details"
                    stepContent={content}
                ></StepModal>
            </Card>
        </>
    );
};
