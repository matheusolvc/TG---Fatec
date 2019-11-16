using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TG001.Pages.Shared
{
    public class LoginPartialController : Controller
    {
        public PartialViewResult LoginPartial() => PartialView("_LoginPartial");
    }
}