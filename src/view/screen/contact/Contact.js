var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Image, InputGroup, Spinner } from 'react-bootstrap';
// image
import { ContactIcon } from '../../../Images/ContactIcon';
// css
import "./contact.css";
// icons
import { TiTickOutline } from "react-icons/ti";
import { IoCloseCircleSharp } from "react-icons/io5";
// emailjs
import emailjs from '@emailjs/browser';
// toastify
import { ToastContainer, toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
var Contact = function () {
    var icon = ContactIcon();
    var notify = function () { return toast.success('🤖 Successfully sent!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Slide,
    }); };
    var form = useRef(null);
    var _a = useState(true), formStatus = _a[0], setFormStatus = _a[1];
    var _b = useState(null), emailStatus = _b[0], setEmailStatus = _b[1];
    var _c = useState(null), subjectStatus = _c[0], setSubjectStatus = _c[1];
    var _d = useState(null), messageStatus = _d[0], setMessageStatus = _d[1];
    var formValidation = function () {
        if (!form.current)
            return false;
        var formElements = form.current.elements;
        var email = formElements.mail.value;
        var subject = formElements.subject.value;
        var message = formElements.message.value;
        var emailValidate = email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        setEmailStatus(emailValidate ? true : false);
        setSubjectStatus(subject.length >= 3 ? true : false);
        setMessageStatus(message.length >= 5 ? true : false);
        return emailValidate && subject.length >= 3 && message.length >= 5;
    };
    var sendMail = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var messageResponse, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!form.current)
                        return [2 /*return*/];
                    if (!formValidation()) return [3 /*break*/, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    setFormStatus(false);
                    return [4 /*yield*/, emailjs.sendForm('service_fquu7mq', 'template_ew9jsn9', form.current, 'Ch90_r-QFo5NUtUV9')];
                case 2:
                    messageResponse = _a.sent();
                    console.log('Email sent successfully:', messageResponse.text);
                    setFormStatus(true);
                    setEmailStatus(null);
                    setSubjectStatus(null);
                    setMessageStatus(null);
                    form.current.reset();
                    notify();
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Error while sending email:", error_1);
                    toast.error('Failed to send email. Please try again later.', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Slide,
                    });
                    return [3 /*break*/, 4];
                case 4: return [3 /*break*/, 6];
                case 5:
                    alert("Form validation failed. Please check the inputs.");
                    _a.label = 6;
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(React.Fragment, null,
        React.createElement("section", null,
            React.createElement(Container, { className: 'col-12 col-sm-9 col-lg-6 px-3 px-sm-0 p-1 my-5' },
                React.createElement("div", { className: "text-center mb-5" },
                    React.createElement("h1", null, "Contact"),
                    React.createElement("p", null, "Feel free to reach out to me for any questions or Opportunities")),
                React.createElement(Col, { className: 'd-flex justify-content-center align-items-center' },
                    React.createElement("div", { className: 'col-12 col-md-9 col-lg-9 p-4 contact-block' },
                        React.createElement("div", { className: 'mb-3 d-flex justify-content-start align-items-center' },
                            React.createElement("h4", { className: 'm-0 mx-2' }, "Email Me"),
                            React.createElement(Image, { src: icon.rocketIcon, width: 40 })),
                        React.createElement(Form, { ref: form, onSubmit: sendMail },
                            React.createElement(InputGroup, { className: "mb-3 parent-contact-block" },
                                React.createElement(FormControl, { className: 'Contact-Input-Groups rounded-4', placeholder: "Your Email", "aria-label": "Email", type: "email", name: "mail" }),
                                emailStatus === false ? React.createElement("span", null,
                                    React.createElement(IoCloseCircleSharp, null)) : emailStatus === true ? React.createElement("span", null,
                                    React.createElement(TiTickOutline, null)) : null),
                            React.createElement(InputGroup, { className: "mb-3 parent-contact-block" },
                                React.createElement(FormControl, { className: 'Contact-Input-Groups rounded-4', placeholder: "Subject", "aria-label": "Subject", type: "text", name: 'subject' }),
                                subjectStatus === false ? React.createElement("span", null,
                                    React.createElement(IoCloseCircleSharp, null)) : subjectStatus === true ? React.createElement("span", null,
                                    React.createElement(TiTickOutline, { color: 'green' })) : null),
                            React.createElement(InputGroup, { className: "mb-3 parent-contact-block" },
                                React.createElement(Form.Control, { as: "textarea", "aria-label": "With textarea", className: 'Contact-Input-Groups rounded-4', placeholder: "Message", rows: 6, name: 'message' }),
                                messageStatus === false ? React.createElement("span", null,
                                    React.createElement(IoCloseCircleSharp, { color: 'red' })) : messageStatus === true ? React.createElement("span", null,
                                    React.createElement(TiTickOutline, { color: 'green' })) : null),
                            React.createElement("div", { className: 'mt-4 Contact-btn text-center' },
                                React.createElement(Button, { className: "rounded-5", type: 'submit' }, formStatus === true ? React.createElement("span", { style: { backgroundColor: "transparent" } }, "send") : React.createElement("span", { className: 'bg-transparent mx-2' },
                                    React.createElement(Spinner, { animation: "border", variant: "info", className: 'spinner', style: { width: '1.2rem', height: '1.2rem' } }))))))),
                React.createElement(ToastContainer, { position: "top-right", autoClose: 2000, hideProgressBar: false, newestOnTop: true, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true, theme: "dark", transition: Slide })))));
};
export default Contact;
