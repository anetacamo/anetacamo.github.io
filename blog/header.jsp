<%@ page import="dk.au.hum.imv.persistence.db.JDBCConnectionFactory" %>
<%@ page import="domain.SessionModel" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<html>
<head>
    <meta charset="utf-8">
    <title>Drink up!</title>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Hey! Come drink with us.">
    <meta property="og:image" content="img/1.jpg"/>
    <link rel="image_src" href="./img/.jpg"/>
    <link rel="stylesheet" href="./css/blog.css"/>
    <link rel="shortcut icon" type="image/png" href="img/favicon.png"/>

    <%
        String url = "jdbc:mysql://student.hum.au.dk:3306/al_ac";
        String userName = "al_ac";
        String password = "HG97AFpQ";

        String dbDriver = "com.mysql.jdbc.Driver";
        JDBCConnectionFactory.initManualConnectionHandling(url, userName, password, dbDriver);

        SessionModel model = (SessionModel) request.getSession().getAttribute("sessionModel");

        if (model == null) {
            model = new SessionModel();
            request.getSession().setAttribute("sessionModel", model);
        }
    %>

</head>
<body>

    <div class="header">
        <a href="index.jsp"><div class="logo"></div></a>

        <form action="search.jsp" method="post">
            <input class="field search" type="search" placeholder="search.." name="search"/>
            <input class="field search go" type="submit" name="submitSearch" value="GO"/>
        </form>

        <nav class="menu">
            <ul>
                <li><a href="drinks.jsp">drinks</a></li>
                <!--<li><a href="vodka.html">vodka</a></li>
                <li><a href="rum.html">rum</a></li>
                <li><a href="gin.html">gin</a></li> -->
                <%if(model.isLoggedIn()){%>

                <a href="createPost.jsp"><li class="pink">Write Post</li></a>
                <a href="loginArea.jsp"><li class="pink">Login-Area</li></a>
                <%} else{
                    %>
                <a href="login.jsp"><li class="pink"> login</li></a>
                <%
                }%>
            </ul>
        </nav>
    </div>