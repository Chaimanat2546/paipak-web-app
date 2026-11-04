# Owner and agent responsibilities

The owner adopted the entire imported handoff pack as the latest planning direction on 2 November 2026 (Asia/Bangkok), superseding conflicting earlier project directions. This confirmation does not start tasks, approve final designs or authorize integrations/deployment. Apply the responsibilities below to subsequent tasks.

On 3 November 2026 the owner confirmed three governance clarifications and subsequently approved Design Governance Kit v1.0 as the project-wide standard: Mitr remains primary with supplementary fonts subject to approval before use; Visual Direction approval precedes Wireframe; the Homepage review example remains illustrative. Each task's design/version still requires explicit owner approval before related frontend implementation. Governance approval does not approve direction outputs, additional fonts or final visual baselines, and does not start tasks. See [Governance README](../design/governance/README.md), the `governance_approval` record in the decision registry, and [task-order](task-order.md). Owner approval must name the relevant gate/artifact/version.

- **Master planning assistant:** scope only — task lists, order, exclusions, dependencies, deliverable categories, high-level acceptance requirements. Do not proactively write UI/code or flesh out implementation details.
- **User/project owner:** selects when to start a task, discusses local details in separate conversation, approves plan and final design/deliverables, selects next task.
- **Design Agent:** wireframes, high fidelity, interaction/state designs within task; no coding unless user explicitly changes task scope.
- **Coding Agent:** writes code after appropriate design approvals, may discuss implementation specifics; cannot redesign global UI.
- **Review/Evidence:** task completion needs actual evidence and owner approval; plans alone do not count.
- **Work separation:** independent backend work may run parallel, but UI task gates depend on approved design artifacts.

## Approval before UI Design and Frontend

The owner clarified on 3 November 2026: “ก่อนทำรวมถึง ui design ด้วย”. Before creating or revising UI Design artifacts, present the selected task's plan/scope and obtain explicit owner approval at G0. This includes direction studies, Wireframes, High-Fi, tokens and component/state designs. Reading, analysis and task-local planning discussion may precede G0. Governance approval or Task ID selection alone does not authorize design production. Existing task-specific authorizations remain valid within their approved scope; do not ask again for the same authorized work.

After the authorized design work and applicable review gates, obtain explicit owner approval of the resulting task design/version before related frontend implementation. These are separate decisions: authorization to start UI Design, then acceptance of its output for Frontend. Neither changes existing task statuses automatically.
