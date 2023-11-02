import { Modal as AntdModal, ModalProps } from "antd";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "../Button";
import { FormInstance } from "../Form/index";
import { Space } from "../Space";
import { Steps } from "../Steps";
import { Subtitle } from "../Typography";
import "./index.css";

export interface IModalProps extends Omit<ModalProps, "" | "onCancel"> {
  okFn?: () => void;
  cancelFn?: () => void;
  form?: FormInstance;
}

export interface StepModalItemProps {
  title: string | React.ReactNode;
  description?: string;
  content: React.ReactNode;
}

export interface IStepModalProps extends Omit<IModalProps, "children"> {
  stepContent: StepModalItemProps[];
  subtitle?: string;
  nextTxt?: string;
  prevTxt?: string;
  maxContentHeight?: string | number;
  customValidation?: (...args: any) => any;
}

export const Modal: React.FC<IModalProps> = ({
  okFn,
  cancelFn,
  cancelText = "Close",
  okText = "Submit",
  children,
  onOk,
  closable = true,
  ...rest
}) => {
  const renderFooter = useCallback(() => {
    return (
      <>
        <Space>
          <Button btntype="Close" onClick={cancelFn}>
            {cancelText}
          </Button>

          <Button hidden={okFn ? false : true} btntype="Submit" onClick={okFn}>
            {okText}
          </Button>
        </Space>
      </>
    );
  }, [okFn, onOk, cancelFn]);

  return (
    <AntdModal
      onCancel={closable ? cancelFn : () => false}
      // onOk={onOk}
      className={`custom-modal ${rest.className || ""}`}
      footer={renderFooter()}
      {...rest}
    >
      {children}
    </AntdModal>
  );
};

export const StepModal: React.FC<IStepModalProps> = ({
  okFn,
  cancelFn,
  cancelText = "Close",
  okText = "Submit",
  nextTxt = "Next",
  prevTxt = "Previous",
  form,
  subtitle,
  closable = true,
  stepContent = [],
  open,
  maxContentHeight = "350px",
  customValidation,
  ...rest
}) => {
  const [current, setCurrent] = useState(0);

  const next = async () => {
    if (form) {
      await form.validateFields();
    }

    if (customValidation) {
      const result = await customValidation();

      if (!result) return;
    }

    setCurrent((prev) => prev + 1);
  };

  const prev = async () => {
    setCurrent((prev) => prev - 1);
  };

  useEffect(() => {
    if (open) {
      setCurrent(0);
    }
  }, [open]);

  return (
    <AntdModal
      open={open}
      onCancel={closable ? cancelFn : () => false}
      className={`custom-modal ${rest.className || ""}`}
      footer={
        <>
          <div
            style={{
              display: "flex",
              justifyContent: current > 0 ? "space-between" : "flex-end",
              width: "100%",
            }}
          >
            <Button btntype="Close" onClick={prev} hidden={current === 0}>
              {prevTxt}
            </Button>

            <Space>
              <Button btntype="Close" onClick={cancelFn}>
                {cancelText}
              </Button>

              {current < stepContent.length - 1 ? (
                <Button btntype="Submit" onClick={next}>
                  {nextTxt}
                </Button>
              ) : (
                <Button btntype="Submit" onClick={okFn}>
                  {okText}
                </Button>
              )}
            </Space>
          </div>
        </>
      }
      {...rest}
    >
      <div style={{ height: "100%" }}>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}

        <div
          style={{
            display: "flex",
            height: "100%",
            maxHeight: maxContentHeight,
          }}
        >
          <Steps
            style={{
              flex: 1,
              background: "#F2F2F2",
              paddingLeft: "18px",
              paddingTop: "24px",
              borderRadius: "8px 0px 0px 8px",
              maxWidth: "30%",
              minWidth: "25%",
            }}
            size="small"
            direction="vertical"
            items={stepContent.map((x) => ({
              title: x.title,
              description: x.description,
            }))}
            current={current}
          ></Steps>

          <div
            style={{
              flex: 3,
              paddingLeft: "12px",
              paddingTop: "18px",
              border: "1px solid #F2F2F2",
              borderRadius: "0px 8px 8px 0px",
              overflow: "auto",
            }}
          >
            {stepContent[current]?.content}
          </div>
        </div>
      </div>
    </AntdModal>
  );
};
