<!DOCTYPE html>
<%--
  Created by IntelliJ IDEA.
  User: andrei
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
    <head>
        <title>Login Flogger</title>
    </head>
    <body>
        <form action="/login" method="post">
            Username: <input type="text" name="username"> <br>
            Password: <input type="password" name="password"> <br>
            <input type="submit" value="Login">
        </form>
    </body>
</html>
