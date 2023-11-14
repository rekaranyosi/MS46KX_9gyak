var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();//Az API Controllerekhez kell 
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();//A Swaggerhez kell
builder.Services.AddSwaggerGen();//A Swaggerhez kell

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())//A Swagger éles környezetben nem indul
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();//Ha http-vel nyitják az oldalt, átirányít https-re

//app.UseAuthorization();//ez nem tudom kell-e

app.UseDefaultFiles();       //Ha nincs semmi a domain tuán, akkor az index.html-t tölti
app.MapControllers();        //Az API Controllereket elérhetõvé teszi
app.UseStaticFiles();        //A wwwroot mappa tartalmát elérhetõvé teszi

app.Run();
