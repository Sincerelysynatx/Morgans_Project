import { Groups } from '../../../both/collections/group.collection';
import { Group } from '../../../both/models/group.model';
//noinspection TypeScriptCheckImport
import { Random } from 'meteor/random';

export function loadGroups(){
    if (Groups.find().cursor.count() === 0){
        const groups = [
        {
            _id : "software",
            group_title : "Software Links",
            links : [
                {
                    url : "https://code-nos.rose.rdlabs.hpecorp.net:8443/",
                    title : "Gerrit Code Review",
                    desc : "Code review time ;)",
                    _id : Random.id()
                },
                {
                    url : "http://buildmaster-nos.rose.rdlabs.hpecorp.net:8080/",
                    title : "Jenkins Home Page",
                    desc : "Let's check what's building",
                    _id : Random.id()
                },
                {
                    url : "https://rndwiki.corp.hpecorp.net/confluence/display/hpnevpg/Halon",
                    title : "Wiki",
                    desc : "Useful place to wiki things",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/halon_src_reviewers",
                    title : "Reviewers",
                    desc : "Who's in charge of this again?",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/jenkins_dashboard",
                    title : "Jenkins' Dashboard",
                    desc : "I got nothing for this one",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/gerrit_dashboard",
                    title : "Gerrit Dashboard",
                    desc : "Another dashboard!",
                    _id : Random.id()
                },
                {
                    url : "http://hpnfiles.rose.rdlabs.hpecorp.net/warp/pub/cit/",
                    title : "Halon Master Periodic Builds",
                    desc : "What's going on in the master branch?",
                    _id : Random.id()
                },
                {
                    url : "http://hpnfiles.rose.rdlabs.hpecorp.net/warp/pub/cit/halon/greenLabel/",
                    title : "Halon Green Builds",
                    desc : "So many files...",
                    _id : Random.id()
                },
                {
                    url : "https://rndwiki.corp.hpecorp.net/confluence/display/hpnevpg/Halon+-+FAQ+and+Common+Errors+and+Solutions",
                    title : "Halon - FAQ: Errors and Solutions",
                    desc : "What chu gotta problem with?",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/smeagol/subscribe.html",
                    title : "Smeagol Registration",
                    desc : "Will cost you a ring",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/metrics/",
                    title : "Check/Gate daily/weekly Metrics",
                    desc : "I got nothing for this one either...",
                    _id : Random.id()
                },
                {
                    url : "https://ent302.sharepoint.hpe.com/teams/Ridley/Shared%20Documents/Halon%20Feature%20Owners.xlsx",
                    title : "Halon Feature Owner List",
                    desc : "Apparently I'm not cool enough to access this link ='(",
                    _id : Random.id()
                },
                {
                    url : "http://doc-nos.rose.rdlabs.hpecorp.net/schema/",
                    title : "Halon Schema",
                    desc : "Get your schema on",
                    _id : Random.id()
                }
            ]
        },
        {
            _id : "testing",
            group_title : "Test Automation Links",
            links : [
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/libs",
                    title : "Modular Framework Test Libraries API",
                    desc : "More documentation!",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/libraries_report/report.php",
                    title : "Halon Libraries Report by Feature",
                    desc : "Cool graph",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/cit_dashboard/dashboard.php",
                    title : "TC Dashboard",
                    desc : "How many dashboards do we need",
                    _id : Random.id()
                },
                {
                    url : "http://halon.rose.rdlabs.hpecorp.net/topology_modular_framework/",
                    title : "Topology Modular Framework Documentation",
                    desc : "Heh, good luck",
                    _id : Random.id()
                }
            ]
        }
        ];



        groups.forEach((group: Group) => Groups.insert(group));
    }
}