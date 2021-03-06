# codebar today at {{host.name}}

Hi,

We're looking forward to seeing you at the codebar workshop today ({{date}}) at 6:30 pm.

**Please let us know if you're no longer able to make it**, so someone else can have your spot. We also ask this because we organise to have the right ratio of coaches to students.

The event will be hosted by **{{host.name}}**, located at [{{{host.address}}}]({{host.map}}). {{{host.instructions}}}.

There will be food and drinks available, courtesy of
{{~#if sponsor}}
{{#with sponsor}}
 **[{{name}}]({{url}})**.
{{/with}}
{{else}}
 our hosts.
{{/if}}
Please let us know if you have any dietary requirements, and we’ll try our best to accommodate you.

**If you're coming for the first time**, make sure to read our [code of conduct][coc] (new coaches should also read the [coach guide][coach-guide]).

**If you're a student**, please bring a [working laptop][setup]. You'll be paired with a coach based on what you want to learn (if you're looking for inspiration, check out our [tutorials]).

{{#with organiser}}
Best wishes,
\
{{name}} ({{pronouns}})
{{#if mobile}}
\
{{mobile}}
{{/if}}
{{/with}}

[coc]: https://codebar.io/code-of-conduct
[coach-guide]: https://codebar.io/effective-teacher-guide
[setup]: http://tutorials.codebar.io/general/setup/tutorial.html
[tutorials]: http://tutorials.codebar.io/