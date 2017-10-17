using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Newtonsoft.Json;
using SQLLibraryKontorsPrylarAB;



namespace KontorsprylarAB.services
{
    public partial class articleLiteral : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            SQLStuff sqlStuff = new SQLStuff();

            string jsonString = JsonConvert.SerializeObject(sqlStuff.ReadAllArticles());

            literalArticles.Text = jsonString;
        }
    }
}