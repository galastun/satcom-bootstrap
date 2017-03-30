# satcom-bootstrap

Glyphs are provided from [FontAwesome](http://fontawesome.io/icons/).

## Global Status Bar

    <div class="statusbar">
        <div class="statusbar-mission">Name</div>
        <ul class="statusbar-nav">
            <li class="nav-item">
                <a class="nav-link">Tab 1</a>
            </li>
            <li class="nav-item">
                <a class="nav-link active">Tab 2</a>
            </li>
        </ul>
        <ul class="statusbar-nav statusbar-right">
            <li class="nav-block">
        <span class="satcom-icon satcom-icon-notification"></span>
        <label>Notifications</label>
                <span class="badge badge-default badge-upper-left">12</span>
            </li>
            <li class="nav-block">
                <span class="badge badge-status-off"></span>
                <span class="satcom-icon satcom-icon-equipment"></span>
        <label>Equipment</label>
            </li>
            <li class="nav-block">
                <button class="btn btn-master-off">Master OFF</button>
            </li>
        </ul>
    </div>
    
## Toolbar
    <div class="toolbar">
        <div class="row">
            <div class="col-sm-6">
                <button class="btn btn-default">Start</button>
            </div>
        </div>
    </div>
or

    <div class="toolbar-secondary">
        <div class="row">
            <div class="col-sm-6">
                <button class="btn btn-default">Start</button>
            </div>
        </div>
    </div>
    
## Panel
    <div class="panel">
        <div class="panel-header">Panel</div>
        <div class="panel-content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vivamus eu orci dolor. In cursus, tellus ac viverra viverra, 
            nunc sapien dapibus velit, non auctor elit erat sit amet nulla. 
            Donec efficitur orci mi, tempor sagittis lacus condimentum et.
            Nullam vitae sagittis enim. Vestibulum lorem magna, molestie 
            sed orci quis, sagittis bibendum arcu. Nulla facilisi. Nunc 
            pretium sagittis ipsum vel ultrices. Pellentesque dictum nisi 
            fringilla tellus pellentesque aliquet. 
        </div>
        <div class="panel-footer">
            <button class="btn btn-default">Apply</button>
        </div>
    </div>

## Textbox
    <input type="text" placeholder="Text Field" />
    
## Search
    <div class="satcom-search">
        <input type="search" placeholder="Search">
        <icons> 
            <i class="search-cancel"></i>
            <i class="search-search"></i>
        </icons>
    </div>
    
## Select
    <select class="dropdown">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>

## Pushbutton
    <div class="satcom-pushbutton">
        <input class="satcom-pushbutton-input" id="toggle" type="checkbox" checked="checked">
        <label class="satcom-pushbutton-button" for="toggle"><span class="off">Off</span><span class="on">On</span></label>
    </div>

## Buttons
    <button class="btn btn-primary">Primary</button>
    <button class="btn btn-default">Default</button>
    <button class="btn btn-secondary">Secondary</button>
    <button class="btn btn-disabled">Disabled</button>
    
## Checkbox
    <div class="satcom-checkbox">
        <input type="checkbox" value="area" id="icon-box" />
        <label for="icon-box">Check 1</label>
    </div>
