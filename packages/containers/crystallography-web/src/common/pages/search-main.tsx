import * as React from "react";
import { SearchTab } from "../components";

export const SearchPage = () => {

    return (
      <div className="search-layout-tabs">
          <header className="app-layout-header">
                <h2 className="text-primary">Crystal Structure Search</h2>
                <SearchTab />
          </header>
          <div className="app-layout-content">
          </div>
      </div>
  );
};

/*
    <div>
                <h2 className="text-primary">Buttons</h2>
                <div className="p-2 m-2">
                    <button className="btn">Default Button</button>&nbsp;&nbsp;
                    <button className="btn disabled">Disabled Button</button>&nbsp;
                </div>
                <div className="p-2 m-2">
                    <button className="btn btn-primary">Primary button</button>&nbsp;&nbsp;
                    <button className="btn btn-primary disabled">Disabled Primary</button>&nbsp;
                </div>

                <div className="p-2 m-2">
                    <button className="btn btn-link">Link button</button>&nbsp;&nbsp;
                    <button className="btn btn-link disabled">Disabled Link</button>&nbsp;
                </div>

                <div className="p-2 m-2">
                    <button className="btn"><i className="icon icon-plus"></i>&nbsp;Default Button</button>&nbsp;&nbsp;
                    <button className="btn btn-primary"><i className="icon icon-plus"></i>&nbsp;Primary Button</button>&nbsp;&nbsp;
                    <button className="btn btn-link"><i className="icon icon-plus"></i>&nbsp;Link Button</button>&nbsp;&nbsp;
                </div>

                <div className="p-2 m-2">
                    <button className="btn btn-icon"><i className="icon icon-plus"></i></button>&nbsp;&nbsp;
                    <button className="btn btn-primary btn-icon"><i className="icon icon-plus"></i></button>&nbsp;&nbsp;
                    <button className="btn btn-link btn-icon"><i className="icon icon-plus"></i></button>&nbsp;&nbsp;
                </div>

                <hr/>

                <hr/>
                <h2 className="text-primary">Typography</h2>
                <h1>Headline 1</h1>
                <h2>Headline 2</h2>
                <h3>Headline 3</h3>
                <h4>Headline 4</h4>
                <h5>Headline 5</h5>
                <h6>Headline 6</h6>
                <p>Default Paragraph - body1  </p>
                <p><a href="/">user link</a></p>
                <hr />
                <h2 className="text-primary">Lists</h2>
                <ul>
                    <li>list item 1</li>
                    <li>list item 2
                    <ul>
                        <li>list item 2.1</li>
                        <li>list item 2.2</li>
                        <li>list item 2.3</li>
                    </ul>
                    </li>
                    <li>list item 3</li>
                </ul>
                <hr />
    </div>
*/

/*
<h2 className="text-primary">Badges</h2>
<p><span className="text-primary p-1">primary color</span></p>
<p><span className="text-secondary p-1">secondary color</span></p>
<p><span className="text-additional p-1">additional color</span></p>
<p><span className="text-dark p-1">dark color</span></p>
<p><span className="text-gray p-1">gray color</span></p>
<p><span className="text-light p-1">light color</span></p>
<p><span className="text-active p-1">active color</span></p>
<p><span className="text-success p-1">success color</span></p>
<p><span className="text-warning p-1">warning color</span></p>
<p><span className="text-error p-1">error color</span></p>

<p><span className="bg-primary p-1">primary bg</span></p>
<p><span className="bg-secondary p-1">secondary bg</span></p>
<p><span className="bg-additional p-1">additional color</span></p>
<p><span className="bg-dark p-1">dark bg</span></p>
<p><span className="bg-default p-1">default bg</span></p>
<p><span className="bg-active p-1">active bg</span></p>
<p><span className="bg-success p-1">success bg</span></p>
<p><span className="bg-warning p-1">warning bg</span></p>
<p><span className="bg-error p-1">error bg</span></p>
<hr/>

<h3 className="text-primary">Form radio</h3>
<div className="form-group">
    <label className="form-radio">
        <input type="radio" name="gender" checked />
        <i className="form-icon"></i> Male
    </label>
    <label className="form-radio">
        <input type="radio" name="gender" />
        <i className="form-icon"></i> Female
    </label>
</div>
< hr/>

<h3 className="text-primary">Checkbox</h3>
<div className="form-group">
    <label className="form-checkbox">
        <input type="checkbox" />
        <i className="form-icon"></i> Remember me
    </label>
</div>
< hr/>
<h3 className="text-primary">Form switch</h3>
<div className="form-group">
    <label className="form-switch">
        <input type="checkbox" />
        <i className="form-icon"></i> Send me emails with news and tips
    </label>
</div>
<hr/>
<h3 className="text-primary">Disabled State</h3>

<fieldset disabled>
<div className="form-group">
<label className="form-label">Name</label>
<input className="form-input" type="text" id="input-example-19" placeholder="Name" />
</div>
<div className="form-group">
<label className="form-label">Gender</label>
<label className="form-radio">
<input type="radio" name="gender" disabled />
<i className="form-icon"></i> Male
</label>
<label className="form-radio">
<input type="radio" name="gender" disabled />
<i className="form-icon"></i> Female
</label>
</div>
<div className="form-group">
<select className="form-select" disabled >
<option>Choose an option</option>
<option>Slack</option>
<option>Skype</option>
<option>Hipchat</option>
</select>
</div>
<div className="form-group">
<label className="form-switch">
<input type="checkbox" disabled />
<i className="form-icon"></i> Send me emails with news and tips
</label>
</div>
<div className="form-group">
<label className="form-label">Message</label>
<textarea className="form-input" id="input-example-20" placeholder="Textarea" disabled></textarea>
</div>
<div className="form-group">
<label className="form-checkbox">
<input type="checkbox" disabled />
<i className="form-icon"></i> Remember me
</label>
</div>
</fieldset>

<hr />
<h3 className="text-primary">Inputs</h3>

<div className="form-group">
    <select className="form-select">
        <option>Choose an option</option>
        <option>Slack</option>
        <option>Skype</option>
        <option>Hipchat</option>
    </select>
</div>

<div className="form-group">
    <label className="form-label label-sm">Name</label>
    <input className="form-input" type="text" id="input-example-1" placeholder="Name" />
</div>
<div className="form-group">
     <label className="form-label label-sm">Message</label>
     <textarea className="form-input" id="input-example-3" placeholder="Textarea"></textarea>
</div>

<div className="form-group">
    <label className="form-label label-sm">Name</label>
    <input className="form-input is-success" type="text" id="input-example-1" placeholder="Name" />
    <div className="form-input-hint">The name is valid</div>
</div>

<div className="form-group has-error">
    <label className="form-label label-sm">Password</label>
    <input className="form-input" type="text" id="input-example-1" placeholder="Password" />
    <div className="form-input-hint">Passwords must have at least 8 characters.</div>
</div>
<hr />
<br />
<h3 className="text-primary">Inputs with icons</h3>
<div className="form-group">
    <div className="has-icon-right">
        <input type="text" className="form-input" placeholder="..." />
        <i className="form-icon loading"></i>
    </div>
</div>
<br />
<div className="form-group">
    <div className="has-icon-left">
        <input type="text" className="form-input" placeholder="..." />
        <i className="form-icon icon icon-check"></i>
    </div>
</div>
<br />
<hr/>
<h2 className="text-primary">Labels</h2>
<div className="p-2">
    <span className="label">default label</span>&nbsp;&nbsp;
    <span className="label label-primary">primary label</span>&nbsp;&nbsp;
    <span className="label label-secondary">secondary label</span>&nbsp;&nbsp;
    <span className="label label-success">success label</span>&nbsp;&nbsp;
    <span className="label label-warning">warning label</span>&nbsp;&nbsp;
    <span className="label label-error">error label</span>&nbsp;&nbsp;
</div>
<div className="p-2">
    <span className="label label-rounded">default label</span>&nbsp;
    <span className="label label-rounded label-primary">primary label</span>&nbsp;&nbsp;
    <span className="label label-rounded label-secondary">secondary label</span>&nbsp;&nbsp;
    <span className="label label-rounded label-success">success label</span>&nbsp;&nbsp;
    <span className="label label-rounded label-warning">warning label</span>&nbsp;&nbsp;
    <span className="label label-rounded label-error">error label</span>&nbsp;&nbsp;
</div>
<hr />
<h2 className="text-primary">Buttons</h2>
<div className="p-2 m-2">
    <button className="btn">default button</button>&nbsp;
    <button className="btn btn-primary">primary button</button>&nbsp;
    <button className="btn btn-link">link button</button>&nbsp;
</div>
<div className="p-2 m-2">
  <button className="btn btn-active">active button</button>&nbsp;
  <button className="btn btn-success">success button</button>&nbsp;
  <button className="btn btn-error">error button</button>&nbsp;
  <button className="btn btn-warning">warning button</button>
</div>
<div className="p-2 m-2">
    <button className="btn btn-primary disabled">primary disabled</button>&nbsp;
    <button className="btn disabled">default disabled</button>&nbsp;
</div>
<div className="p-2 m-2">
    <button className="btn loading">button</button>&nbsp;
    <button className="btn btn-primary loading">primary button</button>
</div>
*/