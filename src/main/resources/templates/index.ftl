<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charset="utf-8" />
    <title>{{title}}</title>

    <meta name="description" content="overview &amp; stats" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

    <!-- bootstrap & fontawesome -->
    <link rel="stylesheet" href="/zum/css/bootstrap.css" />
    <link rel="stylesheet" href="/zum/css/font-awesome.css" />
    <link rel="stylesheet" href="/zum/css/ace-fonts.css" />
    <link rel="stylesheet" href="/zum/css/ace.css" class="ace-main-stylesheet" id="main-ace-style" />
    <!-- inline styles related to this page -->
</head>

<body class="no-skin">
<div id="navbar" class="navbar navbar-default">
    <script type="text/javascript">
        try{ace.settings.check('navbar' , 'fixed')}catch(e){}
    </script>
    <div class="navbar-container" id="navbar-container">
        <button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler">
            <span class="sr-only">Toggle sidebar</span>

            <span class="icon-bar"></span>

            <span class="icon-bar"></span>

            <span class="icon-bar"></span>
        </button>
        <div class="navbar-header pull-left">
            <a href="/" class="navbar-brand" target="_self">
                <small>
                    <i class="fa fa-leaf"></i>
                    {{title}}
                </small>
            </a>
        </div>
        <div class="navbar-buttons navbar-header pull-right" role="navigation">
            <ul class="nav ace-nav">
                <li class="light-blue">
                    <a data-toggle="dropdown" href="#" class="dropdown-toggle">
                    <span class="user-info" style="max-width:250px;">
                        <small>Welcome,</small>
                        {{name}} ({{email}})
                    </span>
                        <i class="ace-icon fa fa-caret-down"></i>
                    </a>
                    <ul class="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                        <li>
                            <a href="/hubzum/logout" target="_self">
                                <i class="ace-icon fa fa-power-off"></i>
                                로그아웃
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</div>
<div class="main-container" id="main-container">
    <div id="sidebar" class="sidebar                  responsive">
        <ul class="nav nav-list">
        </ul>
    </div>
    <div class="main-content">
        <div class="main-content-inner">
            <div class="breadcrumbs" id="breadcrumbs"></div>
            <div class="page-content" id="container"></div>
        </div>
    </div>
</div>
<script src="/dist/common.js"></script>
<script src="/dist/ace.js"></script>
<script src="/dist/app.js"></script>
</body>
</html>

