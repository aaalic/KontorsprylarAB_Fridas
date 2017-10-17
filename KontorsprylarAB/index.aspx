<%@ Page Title="" Language="C#" MasterPageFile="~/Main.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="KontorsprylarAB.index" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="JavaScript/MyJavaScript.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ViewArticles" runat="server">
   <input id="loadButton" type="button" value="Load contacts" />
    <table style="width: 40%;">
       <thead>
            <tr>
                <td>Artikelnummer</td>
                <td>Artikel</td>
                <td>Beskrivning</td>
                <td>Pris</td>
            </tr>
        </thead>
        <tbody id="myTableBody">
        </tbody>
    </table>
</asp:Content>
