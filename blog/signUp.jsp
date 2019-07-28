<%@ page import="domain.Author" %>
<%@ page import="io.AuthorMapper" %>
<%@ page import="javax.script.ScriptEngine" %>
<%@ page import="javax.script.ScriptEngineManager" %>

<%@include file="header.jsp"%>


<div class="full drinks">
    <div class="contain">
        <div class="register">register</div>

<%
    if(request.getParameter("signUp") != null ) {
        if(!request.getParameter("userName").equals("")) {
            Author a = new Author(request.getParameter("userName"), request.getParameter("email"), request.getParameter("password"));
            System.out.println(a);

            new AuthorMapper().save(a);
        }
         response.sendRedirect("login.jsp");


    }
%>

        <form action="signUp.jsp" method="post">
            <input class="field" type="text" name="userName" placeholder="name.."/>
            <input class="field" type="email" name="email" placeholder="mail.."/>
            <input class="field" type="password" name="password"placeholder="password.."/>
            <input class="field left" type="submit" name="signUp" value="signup"/>
            <a href="login.jsp"><div class="field right">login</div></a>
        </form>
    </div>
</div>

<%@include file="footer.jsp"%>