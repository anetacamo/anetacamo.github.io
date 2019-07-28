<%@ page import="domain.Post" %>
<%@ page import="io.AuthorMapper" %>
<%@ page import="io.PostMapper" %>
<%@include file="header.jsp"%>

<div class="full drinks3">

    <div class="comment bb">
        <div class="register bigtop bottom">What is your favourite drink?</div>
        <div class="con">
            <form action="createPost.jsp" method="post">

                <table class="form_table">
                    <input class="field xs" type="text" name="title" placeholder="your drink name"/></td>
                    <input class="field xs" type="text" name="content" placeholder="drink recipe"/></td>
                    </tr>
                    <tr>
                        <td class="content_right"><input class="field right comm" type="submit" name="createPost" value="Post it!"/></td>
                    </tr>
                </table>

            </form>
        </div>
    </div>
    <div class="drinkscontainer">

    <%

        if(request.getParameter("createPost") != null ) {
            if(model.isLoggedIn()) {
                if(!request.getParameter("title").equals("") && !request.getParameter("content").equals("") ) {
                    Post p = new Post(request.getParameter("title"), request.getParameter("content"), model.getUserId(), 0, request.getParameter("image"));
                    new PostMapper().addTo(new AuthorMapper().getById(model.getUserId()), p);
                    new PostMapper().save(p);
                } else {
                    out.print("You need to fill out the form!");
                }
            }
            else {
                out.print("You have to be logged in!");
                out.print("<a href=\"login.jsp\"> To the login!</a>");
            }
        }%>
    </div>
    <div class="push"></div>
</div>



<%@include file="footer.jsp"%>